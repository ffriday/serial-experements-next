import { cacheLife, cacheTag } from "next/cache";
import type { CatalogMenuItemDto } from "@/entities/menu/api";
import { getMenu } from "@/entities/menu/api";

/**
 * Server Component: loads menu on the server and renders into the client header.
 * Pass as `children` to `HeaderContainer` — no client fetch / no hydration.
 *
 * `'use cache'` caches the RSC output across requests (Cache Components).
 * Invalidate with `revalidateTag('menu', 'max')` when the catalog changes.
 */
export const HeaderMenu = async () => {
  "use cache";
  cacheLife("hours");
  cacheTag("menu");

  let roots: CatalogMenuItemDto[] = [];

  try {
    const menu = await getMenu();
    roots = menu.root
      .map((id) => menu.nodes[id])
      .filter((item) => item != null);
  } catch {
    // Missing env / API should not break the whole layout.
  }

  if (roots.length === 0) {
    return (
      <nav aria-label="Main">
        <p>Menu placeholder — set env and confirm `/catnav` response.</p>
      </nav>
    );
  }

  return (
    <nav aria-label="Main">
      <ul className="flex gap-4">
        {roots.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
