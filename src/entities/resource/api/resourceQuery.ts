import { queryOptions } from "@tanstack/react-query";
import type { ResourceDto } from "@/entities/resource/model/types";
import { API_PATHS } from "@/shared/api/constants";
import { http } from "@/shared/api/http";

export const resourceQueryKey = ["resource"] as const;

export const resourceQuery = queryOptions({
  queryKey: resourceQueryKey,
  queryFn: () =>
    http<ResourceDto>(API_PATHS.resource, {
      next: { revalidate: 60 },
    }),
});
