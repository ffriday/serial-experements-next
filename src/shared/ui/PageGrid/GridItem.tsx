import { gridSpanProps } from "@/shared/lib/gridSpanProps";
import {
  GridItemTag,
  type GridItemTagType,
  GridSpan,
  type GridSpanType,
} from "@/shared/types/grid";

export type GridItemProps = {
  as?: GridItemTagType;
  span?: GridSpanType;
  children: React.ReactNode;
};

export const GridItem = ({
  as: Comp = GridItemTag.DIV,
  span = GridSpan.FULL,
  children,
}: GridItemProps) => {
  return <Comp {...gridSpanProps(span)}>{children}</Comp>;
};
