import { cn } from "@/shared/lib/cn";
import { BaseLink, type BaseLinkProps } from "@/shared/ui/BaseLink";
import type { ButtonVariant } from "./Button";
import s from "./Button.module.css";

export type ButtonLinkProps = BaseLinkProps & {
  variant: ButtonVariant;
};

export const ButtonLink = ({
  variant,
  className,
  ...props
}: ButtonLinkProps) => {
  return <BaseLink className={cn(s[variant], className)} {...props} />;
};
