import { cva } from "class-variance-authority";

export const btn = cva(
  "inline-block cursor-pointer rounded-full border-2 border-transparent px-7 py-3.5 font-sans text-[15px] font-bold [transition:background_0.2s_ease,color_0.2s_ease]",
  {
    variants: {
      variant: {
        accent: "bg-brand text-on-brand hover:bg-brand-dark hover:text-white",
        outline:
          "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
        dark: "bg-[#16110a] text-white hover:bg-black",
      },
    },
    defaultVariants: { variant: "accent" },
  },
);

export const SECTION = "py-16 tablet:py-[60px]";

export const HEADING = "text-[clamp(28px,4vw,38px)]";

export const LEAD = "max-w-[640px] text-[18px] text-ink-muted";

export const CARD = "rounded-card border border-line";
