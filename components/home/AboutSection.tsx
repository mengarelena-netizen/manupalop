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
        <p
          className={cn(LEAD, "mt-0 mb-6 max-w-none desktop:mb-8")}
          data-reveal=""
        >
          Pasé dos décadas con obesidad probando todos los métodos del mercado,
          hasta que entendí que la solución no estaba ahí fuera, sino aquí
          dentro.
        </p>
        {/* El texto va primero en el DOM y en pantalla: escritorio a la
            izquierda, movil arriba. Antes iba detras con order-1 y la foto
            se animaba antes que el texto que tiene al lado. */}
        <div className="grid grid-cols-1 items-center gap-10 desktop:grid-cols-[1.3fr_1fr]">
          <div className="grid gap-6">
            <p className={TEXT_LEAD} data-reveal="">
              Un método y una herramienta para llegar a mi subconsciente me
              permitieron bajar 60 kg y cambiar para siempre mi relación con la
              comida y con mi cuerpo.
            </p>
            <p className={TEXT_LEAD} data-reveal="">
              La <strong>respiración consciente</strong> fue el punto de
              inflexión: la herramienta que me permitió romper el ciclo de
              ansiedad y hambre emocional.
            </p>
            <p className={TEXT_LEAD} data-reveal="">
              Hoy dedico mi trabajo a acompañar a otras personas en ese mismo
              camino.
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
