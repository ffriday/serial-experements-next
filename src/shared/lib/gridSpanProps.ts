import { DataAttr } from "@/shared/constants/dataAttributes";
import { GridSpan, type GridSpanType } from "@/shared/types/grid";

type GridSpanProps = {
  [DataAttr.gridSpan]: GridSpanType;
};

export function gridSpanProps(
  span: GridSpanType = GridSpan.FULL,
): GridSpanProps {
  return {
    [DataAttr.gridSpan]: span,
  };
}
