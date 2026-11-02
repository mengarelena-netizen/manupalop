import Container from "@/components/Container";
import { PhotoGallery, type Photo } from "@/components/PhotoCarousels";
import { LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const GALERIA: Photo[] = [
  {
    src: "/images/opt/galary/galary1.webp",
    alt: "Manu Palop dirigiendo una sesión de respiración consciente",
  },
  {
    src: "/images/opt/galary/galary2.webp",
    alt: "Participante tumbada durante una sesión de respiración consciente",
  },
  {
    src: "/images/opt/galary/galary3.webp",
    alt: "Manu Palop acompañando a una participante en una sesión de respiración consciente",
  },
  {
    src: "/images/opt/galary/galary4.webp",
    alt: "Manu Palop guiando a los asistentes durante una sesión de respiración consciente",
  },
  {
    src: "/images/opt/galary/galary5.webp",
    alt: "Grupo completo en una sesión de respiración consciente",
  },
];

const TEXT_LEAD = cn(LEAD, "m-0 max-w-none");

export default function AboutSection() {
  return (
    <section className={SECTION} id="quien-soy">
      <Container>
        {/* El texto va primero en el DOM y en pantalla: escritorio a la
            izquierda, movil arriba. Antes iba detras con order-1 y la foto
            se animaba antes que el texto que tiene al lado. */}
        <div className="grid grid-cols-1 items-center gap-10 desktop:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-6">
            <p className={TEXT_LEAD} data-reveal="">
              La <strong>respiración consciente</strong> fue una de las
              herramientas que marcó un antes y un después en mi proceso. Me
              ayudó a tomar conciencia de mis patrones, de mis emociones y de mi
              relación con la comida.
            </p>
            <p className={TEXT_LEAD} data-reveal="">
              Hoy comparto todo lo que he aprendido para ayudar a otras personas
              a conseguir una transformación que vaya mucho más allá del espejo.
            </p>
          </div>
          <div
            className="mx-auto w-[min(100%,300px)] justify-self-center desktop:mx-0 desktop:w-auto desktop:justify-self-auto"
            data-reveal="zoom"
          >
            <PhotoGallery
              photos={GALERIA}
              className="desktop:max-h-[460px]"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
