import Container from "@/components/Container";
import { CARD } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const LINKS = "[&_a]:text-brand-dark [&_a]:underline";
const LISTS =
  "[&_ul]:mt-3 [&_ul]:mb-5 [&_ul]:pl-5 [&_li]:mb-2.5 [&_li]:leading-[1.6] [&_li]:text-ink";

export const LEGAL_INTRO = "mb-8 text-[17px] leading-[1.6] text-ink-muted";
export const LEGAL_SUBTITLE = "mt-6 mb-2 text-[17px] font-bold text-ink";

export function LegalContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Container
      className={cn(
        "max-w-[820px] pt-6 pb-16 [&_h1]:mb-6 [&_h1]:text-[clamp(28px,4vw,36px)]",
        className,
      )}
    >
      {children}
    </Container>
  );
}

export function LegalCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        CARD,
        LINKS,
        LISTS,
        "mb-9 bg-surface-alt p-7 [&_h3]:mt-0 [&_h3]:mb-4 [&_h3]:text-[20px] [&_h3]:text-ink",
      )}
    >
      {children}
    </div>
  );
}

export function LegalBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        LINKS,
        LISTS,
        "mb-8",
        "[&_h2]:mt-7 [&_h2]:mb-3.5 [&_h2]:border-b [&_h2]:border-line [&_h2]:pb-2 [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:text-ink",
        "[&_p]:mb-3.5 [&_p]:text-[16px] [&_p]:leading-[1.65] [&_p]:text-ink",
      )}
    >
      {children}
    </div>
  );
}
