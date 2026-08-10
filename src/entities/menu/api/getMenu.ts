import { cache } from "react";
import type { CatalogMenuDto } from "@/entities/menu/api/dto";
import { API_PATHS } from "@/shared/api/constants";
import { http } from "@/shared/api/http";

/**
 * Server-only loader for the header menu.
 * - `cache()` dedupes within a single RSC request
 * - `next.revalidate` / `tags` use the Next.js Data Cache (not TanStack Query)
 */
export const getMenu = cache(async (): Promise<CatalogMenuDto> => {
  return http<CatalogMenuDto>(API_PATHS.menu, {
    next: {
      revalidate: 3600,
    },
  });
});
