import { DataAttr } from '@/shared/constants/dataAttributes';
import type { ColorSetType, TransparencyType } from '@/shared/types/view';

type BodyDataProps = {
  [DataAttr.colorSet]: ColorSetType;
  [DataAttr.transparency]: TransparencyType;
};

export function bodyDataProps(options: {
  colorType: ColorSetType;
  transparencyType: TransparencyType;
}): BodyDataProps {
  return {
    [DataAttr.colorSet]: options.colorType,
    [DataAttr.transparency]: options.transparencyType,
  };
}
