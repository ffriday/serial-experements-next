import { PageGridTag, type PageGridTagType } from "@/shared/types/grid";
import s from "./PageGrid.module.css";

export type PageGridProps = {
  as?: PageGridTagType;
  children: React.ReactNode;
};

export const PageGrid = ({
  as: Comp = PageGridTag.DIV,
  children,
}: PageGridProps) => {
  return <Comp className={s.pageGrid}>{children}</Comp>;
};
