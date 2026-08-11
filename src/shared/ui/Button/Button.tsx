import { cn } from "@/shared/lib/cn";
import { BaseButton, type BaseButtonProps } from "@/shared/ui/BaseButton";
import s from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export type ButtonProps = BaseButtonProps & {
  variant: ButtonVariant;
};

export const Button = ({ variant, className, ...props }: ButtonProps) => {
  return <BaseButton className={cn(s[variant], className)} {...props} />;
};
