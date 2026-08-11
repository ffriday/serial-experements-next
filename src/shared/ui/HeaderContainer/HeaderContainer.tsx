"use client";
import { useRefScrollState } from '@/shared/hooks/useRefScrollState';
import { GridItem, PageGrid } from "@/shared/ui/PageGrid";
import s from './HeaderContainer.module.css';

export type HeaderContainerProps = {
  children: React.ReactNode;
};

export const HeaderContainer = ({ children }: HeaderContainerProps) => {
  const { ref } = useRefScrollState();

  return (
    <header ref={ref} className={s.headerContainer}>
      <PageGrid>
        <GridItem span="m">
          {children}
        </GridItem>
      </PageGrid>
    </header>
  );
};