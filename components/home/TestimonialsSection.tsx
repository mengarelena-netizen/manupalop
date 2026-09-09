import Container from "@/components/Container";
import VideoFacade from "@/components/VideoFacade";
import { HEADING, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const TESTIMONIOS = [
  {
    quote:
      "“Terminé el programa y no solo he visto cambios en mi cuerpo, sobre todo en la manera de relacionarme conmigo misma. Sigo en contacto con él porque es una gran fuente de inspiración”",
    name: "Ana Antelm",
    year: "· 2025",
  },
  {
    quote:
      "“He perdido los 40 kg que me sobraban. Es la primera vez en mi vida que siento que estoy haciendo lo correcto por mi cuerpo. Hoy, un año después, sigo concienciada y mejorando día a día.”",
    name: "Laura Silva",
    year: "· 2023",
  },
  {
    quote:
      "“Después de año y medio, creo que trabajar con Manu ha sido la mejor inversión de mi vida. He perdido peso y ganado vida. Gracias por todo, tío.”",
    name: "Marcos Huerta",
    year: "· 2024",
  },
  {
    quote:
      "“Una sola sesión de respiración con Manu me abrió los ojos. Por primera vez sentí que podía con todo.”",
    name: "Víctor Moreno",
    year: "· 2025",
  },
  {
    quote:
      "“Respirar se ha convertido en un hábito y veo los cambios a todos los niveles. Me siento más feliz y estoy perdiendo peso.”",
    name: "Loli Méndez",
    year: "· 2024",
  },
  {
    quote:
      "“Manu es un crack. Lo mismo te ayuda a perder peso que te da consejos de vida. En resumen, Manu pone orden a tu vida.”",
    name: "Alberto Galán",
    year: "· 2026",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={SECTION} id="testimonios">
      <Container>
        <div>
          <h2
            className={cn(HEADING, "text-left desktop:text-center")}
            data-reveal=""
          >
            Ellos han confiado en mí
          </h2>
          <p
            className={cn(
              LEAD,
              "mx-0 text-left desktop:mx-auto desktop:text-center",
            )}
            data-reveal=""
          >
            Y yo les he ayudado a transformar sus vidas.
          </p>

          <div
            className="mx-auto mt-10 mb-14 flex max-w-[820px] flex-col items-center rounded-[24px] border border-line bg-surface-alt px-4 pt-7 pb-6 tablet:px-6 tablet:pt-11 tablet:pb-8"
            data-reveal="zoom"
          >
            <VideoFacade
              src="/testimonials.mp4"
              poster="/images/opt/testimonio-video-poster.webp"
              posterAlt="Clientes del Club VIP contando su experiencia en vídeo"
              ariaLabel="Reproducir el vídeo con los testimonios de clientes"
              width={720}
              height={1272}
            />
            <p className="mt-5 mb-0 text-left text-[15px] text-ink-muted desktop:text-center">
              Testimonios de clientes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2">
          {TESTIMONIOS.map((t) => (
            <blockquote
              key={t.name}
              className="m-0 rounded-card bg-surface-alt p-7"
              data-reveal=""
            >
              <p className="mx-0 mt-0 mb-4 text-[16px]">{t.quote}</p>
              <cite className="block font-bold not-italic">
                {t.name}{" "}
                <span className="font-normal text-ink-muted">{t.year}</span>
              </cite>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
