import { cn } from "@/lib/utils";

export const CONTAINER = "mx-auto max-w-[730px] px-6";

export default function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}: React.ComponentProps<"div"> & { as?: "div" | "section" | "main" }) {
  return (
    <Tag className={cn(CONTAINER, className)} {...rest}>
      {children}
    </Tag>
  );
}
