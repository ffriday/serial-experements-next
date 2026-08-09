import { Direction } from '@/shared/types/direction';

export const DataAttr = {
  colorSet: "data-color-set",
  transparency: "data-transparency",
  scrolled: "data-scrolled",
  scrollDirection: "data-scroll-direction",
} as const;

export type DataAttrKey = keyof typeof DataAttr;

export type DataAttrName = (typeof DataAttr)[DataAttrKey];

export const ScrollDirection = {
  UP: Direction.UP,
  DOWN: Direction.DOWN,
} as const;

export type ScrollDirectionType =
  (typeof ScrollDirection)[keyof typeof ScrollDirection];
