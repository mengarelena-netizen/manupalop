import Container from "@/components/Container";

const THUMBS = ["ad-2", "ad-3", "ad-4"];

export default function BeforeAfterSection() {
  return (
    <section id="antes-despues">
      <Container>
        <div>
          <div
            className="mt-10 overflow-hidden rounded-card border border-line"
            data-reveal="zoom"
            data-reveal-first
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-auto w-full"
              src="/images/opt/antes-despues-principal.webp"
              srcSet="/images/opt/antes-despues-principal.webp 1x, /images/opt/antes-despues-principal@2x.webp 2x"
              width={682}
              height={512}
              fetchPriority="high"
              alt="Manu Palop antes y después de perder 60 kg"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 tablet:grid-cols-3">
            {THUMBS.map((n) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={n}
                className="h-auto w-full rounded-[10px] border border-line"
                src={`/images/opt/${n}.webp`}
                srcSet={`/images/opt/${n}.webp 1x, /images/opt/${n}@2x.webp 2x`}
                width={320}
                height={240}
                alt="Transformación de Manu Palop, antes y después"
                fetchPriority="low"
                decoding="async"
                data-reveal="zoom"
                data-reveal-first
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
