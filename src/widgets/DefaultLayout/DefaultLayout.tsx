import { HeaderMenu } from "@/entities/menu/ui/HeaderMenu";
import { bodyDataProps } from "@/shared/lib/bodyDataProps";
import {
  ColorSet,
  type ColorSetType,
  Transparency,
  type TransparencyType,
} from "@/shared/types/view";
import { HeaderContainer } from "@/shared/ui/HeaderContainer";
import s from "./DefaultLayout.module.css";

type DefaultLayoutProps = LayoutProps<"/"> & {
  children: React.ReactNode;
  transparencyType?: TransparencyType;
  colorType?: ColorSetType;
};

export const DefaultLayout = ({
  children,
  transparencyType = Transparency.SOLID,
  colorType = ColorSet.LIGHT,
}: DefaultLayoutProps) => {
  return (
    <body
      className="min-h-full flex flex-col"
      {...bodyDataProps({ colorType, transparencyType })}
    >
      <HeaderContainer>
        <HeaderMenu />
      </HeaderContainer>
      <div className={s.headerSpacer} aria-hidden="true" />
      {children}
      <footer></footer>
    </body>
  );
};
