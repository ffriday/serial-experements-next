import { cn } from "@/shared/lib/cn";
import { Link } from "@/shared/navigation";
import s from "./BaseLink.module.css";

export type BaseLinkProps = React.ComponentProps<typeof Link>;

export const BaseLink = ({ className, ...props }: BaseLinkProps) => {
  return <Link className={cn(s.root, className)} {...props} />;
};
