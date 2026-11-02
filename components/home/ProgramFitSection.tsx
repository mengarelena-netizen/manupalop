import Container from "@/components/Container";
import PhotoCarousels, { type Photo } from "@/components/PhotoCarousels";
import { CARD, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const ANTES: Photo[] = [
  {
    src: "/images/opt/antes-1.webp",
    alt: "Manu Palop con 140 kg, en la playa",
  },
  {
    src: "/images/opt/antes-2.webp",
    alt: "Manu Palop con 140 kg, en la escalera",
  },
  {
    src: "/images/opt/antes-3.webp",
    alt: "Manu Palop con 140 kg, en la ciudad",
  },
  {
    src: "/images/opt/antes-4.webp",
    alt: "Manu Palop con 140 kg, en un acantilado",
  },
  {
    src: "/images/opt/antes-5.webp",
    alt: "Manu Palop con 140 kg, junto a un faro",
  },
  {
    src: "/images/opt/antes-6.webp",
    alt: "Manu Palop con 140 kg, en el estadio Bernabéu",
  },
  {
    src: "/images/opt/antes-7.webp",
    alt: "Manu Palop con 140 kg, el día de su graduación",
  },
];

const DESPUES: Photo[] = [
  {
    src: "/images/opt/despues-1.webp",
    alt: "Manu Palop con 80 kg, de viaje en Nueva York",
  },
  {
    src: "/images/opt/despues-2.webp",
    alt: "Manu Palop con 80 kg, disfrutando de una comida equilibrada",
  },
  {
    src: "/images/opt/despues-3.webp",
    alt: "Manu Palop con 80 kg, jugando al pádel",
  },
  {
    src: "/images/opt/despues-4.webp",
    alt: "Manu Palop con 80 kg, firmando ejemplares de su libro",
  },
  {
    src: "/images/opt/despues-5.webp",
    alt: "Manu Palop con 80 kg, retrato de estudio",
  },
  {
    src: "/images/opt/despues-6.webp",
    alt: "Manu Palop con 80 kg, retrato de estudio",
  },
  {
    src: "/images/opt/despues-7.webp",
    alt: "Manu Palop con 80 kg, jugando al tenis",
  },
];

const FIT_LABEL =
  "mx-0 mt-0 mb-2.5 text-[13px] font-extrabold tracking-[0.04em] uppercase";
const FIT_TEXT = "m-0 text-[16px] text-ink";

export default function ProgramFitSection() {
  return (
    <section className={cn(SECTION, "bg-surface-alt")} id="para-quien">
      <Container>
        <div className="mx-auto max-w-[780px] text-left">
          <h2 className="mb-6" data-reveal="">
            No es otro programa para adelgazar. Es una oportunidad para lograr
            la vida que quieres.
          </h2>
          <div className={cn(LEAD, "flex flex-col gap-4")} data-reveal="">
            <p className="m-0">
              El objetivo de mi Club VIP no es que dependas de mí de por vida.
              Es ayudarte a cambiar tu relación con el cuerpo, la comida y
              contigo mismo. Que aprendas a gestionar tus hábitos, trabajar tu
              mentalidad y tomar las riendas.
            </p>
            <p className="m-0">
              Quiero que dentro de 12 meses ya no me necesites.
            </p>
          </div>

          <div className="mt-10 mb-12 grid grid-cols-1 gap-5 text-left tablet:grid-cols-2">
            <div
              className={cn(CARD, "bg-surface-alt p-[26px]")}
              data-reveal="zoom"
            >
              <p className={cn(FIT_LABEL, "text-ink-muted")}>
                NO es para ti si:
              </p>
              <p className={FIT_TEXT}>
                Buscas resultados inmediatos, soluciones mágicas o perder peso
                sin cambiar nada de tu forma de actuar.
              </p>
            </div>
            <div
              className={cn(CARD, "border-brand bg-brand-soft p-[26px]")}
              data-reveal="zoom"
            >
              <p className={cn(FIT_LABEL, "text-brand-dark")}>
                SÍ es para ti si:
              </p>
              <p className={FIT_TEXT}>
                Estás dispuesto a mirarte por dentro, cuestionar aquello que te
                limita y comprometerte.
              </p>
            </div>
          </div>

          <p
            className="mx-0 mt-0 mb-10 max-w-[640px] text-[20px] font-bold"
            data-reveal=""
          >
            Mira cómo ha cambiado mi vida e imagina todo lo que puedes conseguir
            si empiezas a trabajar en la tuya.
          </p>
        </div>

        <div>
          <div data-reveal="zoom">
            <PhotoCarousels antes={ANTES} despues={DESPUES} />
          </div>
        </div>
      </Container>
    </section>
  );
}
