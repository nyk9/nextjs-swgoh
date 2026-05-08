"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

type ParamUpdate = Record<string, string | string[] | null>;

function useUrlFilterParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParams = useCallback(
    (updates: ParamUpdate) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        const isEmpty =
          value === null ||
          value === "" ||
          (Array.isArray(value) && value.length === 0);
        if (isEmpty) {
          params.delete(key);
        } else if (Array.isArray(value)) {
          params.set(key, value.join(","));
        } else {
          params.set(key, value);
        }
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return { searchParams, setParams };
}

export function useUrlString(
  key: string,
): [string, (value: string) => void] {
  const { searchParams, setParams } = useUrlFilterParams();
  const value = searchParams.get(key) ?? "";
  const setValue = useCallback(
    (next: string) => setParams({ [key]: next }),
    [key, setParams],
  );
  return [value, setValue];
}

export function useUrlList(
  key: string,
): [string[], (item: string) => void, (next: string[]) => void] {
  const { searchParams, setParams } = useUrlFilterParams();
  const value = useMemo(() => {
    const raw = searchParams.get(key);
    if (!raw) return [];
    return raw.split(",").filter(Boolean);
  }, [key, searchParams]);

  const toggle = useCallback(
    (item: string) => {
      const next = value.includes(item)
        ? value.filter((v) => v !== item)
        : [...value, item];
      setParams({ [key]: next });
    },
    [key, setParams, value],
  );

  const setList = useCallback(
    (next: string[]) => setParams({ [key]: next }),
    [key, setParams],
  );

  return [value, toggle, setList];
}

export function useUrlReset(keys: string[]): () => void {
  const { setParams } = useUrlFilterParams();
  return useCallback(() => {
    const cleared: ParamUpdate = {};
    for (const key of keys) cleared[key] = null;
    setParams(cleared);
  }, [keys, setParams]);
}
