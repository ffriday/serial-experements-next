import { cn } from "@/shared/lib/cn";

const ICON_SPRITE_URL = "/icons.svg";

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, "children"> & {
  name: string;
  title?: string;
};

export const Icon = ({ name, title, className, ...props }: IconProps) => {
  const svgClassName = cn("block shrink-0", className ?? "size-[1em]");

  if (title) {
    return (
      <svg
        className={svgClassName}
        fill="currentColor"
        role="img"
        aria-label={title}
        {...props}
      >
        <title>{title}</title>
        <use href={`${ICON_SPRITE_URL}#${name}`} />
      </svg>
    );
  }

  return (
    <svg
      className={svgClassName}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <use href={`${ICON_SPRITE_URL}#${name}`} />
    </svg>
  );
};
