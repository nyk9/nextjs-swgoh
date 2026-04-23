import { ImageResponse } from "next/og";

export const alt = "SWGoH Japan Database | swgoh4jp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          justifyContent: "space-between",
          backgroundColor: "#070b14",
          backgroundImage:
            "radial-gradient(60% 40% at 15% 15%, rgba(34,211,238,0.22) 0%, rgba(34,211,238,0) 70%), radial-gradient(45% 35% at 85% 25%, rgba(245,158,11,0.18) 0%, rgba(245,158,11,0) 75%), radial-gradient(40% 28% at 50% 95%, rgba(217,70,239,0.18) 0%, rgba(217,70,239,0) 75%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(165, 243, 252, 0.45)",
              backgroundColor: "rgba(165, 243, 252, 0.1)",
              fontSize: 24,
              letterSpacing: 5,
              color: "#bae6fd",
              fontWeight: 700,
            }}
          >
            STAR WARS: GALAXY OF HEROES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 128,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            SWGoH
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
              color: "#e2e8f0",
            }}
          >
            Japan Database
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "rgba(255,255,255,0.72)",
              fontWeight: 500,
              marginTop: 12,
            }}
          >
            Characters · Ships · TW Counters · AI Advisor
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#f1f5f9",
              letterSpacing: 2,
              fontWeight: 700,
            }}
          >
            swgoh4jp.com
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: 4,
              fontWeight: 600,
            }}
          >
            JAPANESE EDITION
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
