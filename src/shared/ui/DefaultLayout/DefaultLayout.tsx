import { bodyDataProps } from '@/shared/lib/bodyDataProps';
import { ColorSet, Transparency, type ColorSetType, type TransparencyType } from '@/shared/types/view';
import { HeaderContainer } from '@/shared/ui/HeaderContainer';
import s from './DefaultLayout.module.css';

type DefaultLayoutProps = LayoutProps<"/"> & {
  children: React.ReactNode;
  transparencyType?: TransparencyType;
  colorType?: ColorSetType;
};

export default function DefaultLayout({
  children,
  transparencyType = Transparency.SOLID,
  colorType = ColorSet.LIGHT,
}: DefaultLayoutProps) {
  return (
    <body
      className="min-h-full flex flex-col"
      {...bodyDataProps({ colorType, transparencyType })}
    >
      <HeaderContainer >
        test header container
      </HeaderContainer>
      <div className={s.headerSpacer} aria-hidden="true" />
      {children}
      <footer></footer>
    </body>
  );
}
