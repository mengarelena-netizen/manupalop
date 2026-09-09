import Container from "@/components/Container";

export default function BeforeAfterSection() {
  return (
    <section id="antes-despues">
      <Container>
        <div className="mt-10 overflow-hidden rounded-card border border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-auto w-full"
            src="/images/antes-despues-principal.jpg"
            alt="Manu Palop antes y después de perder 60 kg"
          />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 tablet:grid-cols-3">
          {["ad-2", "ad-3", "ad-4"].map((n) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={n}
              className="h-auto w-full rounded-[10px] border border-line"
              src={`/images/${n}.jpg`}
              alt="Transformación de Manu Palop, antes y después"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
