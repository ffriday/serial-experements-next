import type { DirectionType } from "@/shared/types/direction";
import { Direction } from "@/shared/types/direction";
import { isServer } from '@/shared/lib/platform';

export const verticalScrollDirection = (lastY: number): Extract<DirectionType, "up" | "down"> | null => {
  if (isServer() || typeof lastY !== "number") {
    return null;
  }

  const currentY = window.scrollY;
  if (currentY > lastY) {
    return Direction.DOWN;
  } else if (currentY < lastY) {
    return Direction.UP;
  }

  return null;
};