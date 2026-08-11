import {
  DataAttr,
  type DataAttrKey,
  type ScrollDirectionType,
} from "@/shared/constants/dataAttributes";
import type { GridSpanType } from "@/shared/types/grid";
import type { ColorSetType, TransparencyType } from "@/shared/types/view";

type DataAttrValueMap = {
  colorSet: ColorSetType;
  transparency: TransparencyType;
  scrolled: boolean;
  scrollDirection: ScrollDirectionType;
  gridSpan: GridSpanType;
};

export function setDataAttr<K extends DataAttrKey>(
  el: HTMLElement,
  key: K,
  value: DataAttrValueMap[K] | null,
) {
  const attr = DataAttr[key];

  if (value === null) {
    el.removeAttribute(attr);
    return;
  }

  el.setAttribute(attr, String(value));
}
