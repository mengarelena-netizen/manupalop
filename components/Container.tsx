import { cn } from "@/lib/utils";

export default function Container({
  as: Tag = "div",
  className,
  children,
  ...rest
}: React.ComponentProps<"div"> & { as?: "div" | "section" | "main" }) {
  return (
    <Tag className={cn("mx-auto max-w-[730px] px-6", className)} {...rest}>
      {children}
    </Tag>
  );
}
