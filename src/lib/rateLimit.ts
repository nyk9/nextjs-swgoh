import { createClient, type RedisClientType } from "redis";

const POINTS = 5;
const TTL_SECONDS = 24 * 60 * 60;
const KEY_PREFIX = "rl:advice";

declare global {
  // eslint-disable-next-line no-var
  var __rateLimitRedis: RedisClientType | undefined;
  // eslint-disable-next-line no-var
  var __rateLimitConnect: Promise<RedisClientType> | undefined;
}

async function getRedis(): Promise<RedisClientType> {
  if (global.__rateLimitRedis?.isOpen) return global.__rateLimitRedis;
  if (global.__rateLimitConnect) return global.__rateLimitConnect;

  const url = process.env.REDIS_URL;
  if (!url) throw new Error("REDIS_URL environment variable is not set");

  const client: RedisClientType = createClient({ url });
  client.on("error", (err) => {
    console.error("[rateLimit] redis error:", err);
  });

  global.__rateLimitConnect = client.connect().then(() => {
    global.__rateLimitRedis = client;
    global.__rateLimitConnect = undefined;
    return client;
  });
  return global.__rateLimitConnect;
}

function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

export type RateLimitResult =
  | { ok: true; limit: number; remaining: number; reset: number }
  | { ok: false; limit: number; remaining: number; reset: number; retryAfter: number };

export async function checkRateLimit(request: Request): Promise<RateLimitResult> {
  // dev では rate limit を bypass（5 req/24h だと検証が回らないため）
  if (process.env.NODE_ENV !== "production") {
    return {
      ok: true,
      limit: POINTS,
      remaining: POINTS,
      reset: Math.floor(Date.now() / 1000) + TTL_SECONDS,
    };
  }

  const ip = getClientIp(request);
  const key = `${KEY_PREFIX}:${ip}`;
  const client = await getRedis();

  const replies = await client.multi().incr(key).ttl(key).exec();
  const count = Number(replies[0]);
  let ttl = Number(replies[1]);

  if (ttl < 0) {
    await client.expire(key, TTL_SECONDS);
    ttl = TTL_SECONDS;
  }

  const remaining = Math.max(0, POINTS - count);
  const reset = Math.floor(Date.now() / 1000) + ttl;

  if (count > POINTS) {
    return { ok: false, limit: POINTS, remaining: 0, reset, retryAfter: ttl };
  }
  return { ok: true, limit: POINTS, remaining, reset };
}

export function rateLimitHeaders(result: RateLimitResult): Record<string, string> {
  const headers: Record<string, string> = {
    "X-RateLimit-Limit": String(result.limit),
    "X-RateLimit-Remaining": String(result.remaining),
    "X-RateLimit-Reset": String(result.reset),
  };
  if (!result.ok) {
    headers["Retry-After"] = String(result.retryAfter);
  }
  return headers;
}
