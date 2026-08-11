import { cn } from "@/shared/lib/cn";
import s from "./BaseButton.module.css";

export type BaseButtonProps = React.ComponentProps<"button">;

export const BaseButton = ({
  type = "button",
  className,
  ...props
}: BaseButtonProps) => {
  return <button type={type} className={cn(s.root, className)} {...props} />;
};
