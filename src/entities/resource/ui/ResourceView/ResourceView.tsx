"use client";

import { useQuery } from "@tanstack/react-query";
import { resourceQuery } from "@/entities/resource/api";

export function ResourceView() {
  const { data, error, isPending, isError } = useQuery(resourceQuery);

  if (isPending) {
    return <p>Loading resource…</p>;
  }

  if (isError) {
    return (
      <p role="alert">
        Failed to load resource:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </p>
    );
  }

  return (
    <pre>
      <code>{JSON.stringify(data, null, 2)}</code>
    </pre>
  );
}
