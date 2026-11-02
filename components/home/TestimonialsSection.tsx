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
            Ellos han confiado en mí y lo han conseguido
          </h2>
          <div
            className={cn(
              LEAD,
              "mx-0 flex flex-col gap-4 text-left desktop:mx-auto desktop:text-center",
            )}
            data-reveal=""
          >
            <p className="m-0">
              Cada persona tiene su propia historia, sus propios obstáculos y su
              propio camino.
            </p>
            <p className="m-0">
              Estas son algunas de las personas que han decidido dar el paso y
              empezar a trabajar en sí mismas.
            </p>
          </div>

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
      </Container>

      {/* Los testimonios pasan solos en bucle. La lista va dos veces para que
          el -50% del desplazamiento cierre la vuelta sin salto; la copia queda
          oculta para lectores de pantalla. */}
      <div className="testimonial-marquee" data-reveal="">
        <div className="testimonial-track">
          {[false, true].map((copy) => (
            <div
              key={String(copy)}
              className="testimonial-set"
              aria-hidden={copy || undefined}
            >
              {TESTIMONIOS.map((t) => (
                <blockquote
                  key={t.name}
                  className="m-0 flex w-[min(80vw,340px)] shrink-0 flex-col rounded-card bg-surface-alt p-7"
                >
                  <p className="mx-0 mt-0 mb-4 text-[16px]">{t.quote}</p>
                  <cite className="mt-auto block font-bold not-italic">
                    {t.name}{" "}
                    <span className="font-normal text-ink-muted">{t.year}</span>
                  </cite>
                </blockquote>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
