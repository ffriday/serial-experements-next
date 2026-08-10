import type { MediaAsset } from "@/shared/types/media";

/**
 * Wire types for catalog menu (`catnav`).
 * Shape mirrors the stage backend.
 */

export type CatalogMenuItemDto = {
  id: number;
  code: string;
  name: string;
  picture: string;
  media: MediaAsset | null;
  menu_media: MediaAsset | null;
  count: number;
  url: string;
  children: number[];
};

export type CatalogMenuNodesDto = Record<number, CatalogMenuItemDto>;

export type CatalogMenuDto = {
  nodes: CatalogMenuNodesDto;
  root: number[];
};
