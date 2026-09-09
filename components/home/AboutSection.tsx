import Container from "@/components/Container";
import { PhotoGallery, type Photo } from "@/components/PhotoCarousels";
import { LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const GALERIA: Photo[] = [
  {
    src: "/images/galary/galary1.jpg",
    alt: "Manu Palop dirigiendo una sesión de respiración consciente",
  },
  {
    src: "/images/galary/galary2.JPG",
    alt: "Participante tumbada durante una sesión de respiración consciente",
  },
  {
    src: "/images/galary/galary3.JPG",
    alt: "Manu Palop acompañando a una participante en una sesión de respiración consciente",
  },
  {
    src: "/images/galary/galary4.JPG",
    alt: "Manu Palop guiando a los asistentes durante una sesión de respiración consciente",
  },
  {
    src: "/images/galary/galary5.jpg",
    alt: "Grupo completo en una sesión de respiración consciente",
  },
];

const TEXT_LEAD = cn(LEAD, "m-0 max-w-none");

export default function AboutSection() {
  return (
    <section className={SECTION} id="quien-soy">
      <Container>
        <p className={cn(LEAD, "mt-0 mb-6 max-w-none desktop:mb-8")}>
          Pasé dos décadas con obesidad probando todos los métodos del mercado,
          hasta que entendí que la solución no estaba ahí fuera, sino aquí
          dentro.
        </p>
        <div className="grid grid-cols-1 items-center gap-10 desktop:grid-cols-[1.3fr_1fr]">
          <PhotoGallery
            photos={GALERIA}
            className="order-1 mx-auto w-[min(100%,300px)] justify-self-center desktop:mx-0 desktop:max-h-[460px] desktop:w-auto desktop:justify-self-auto"
          />
          <div className="grid gap-6">
            <p className={TEXT_LEAD}>
              Un método y una herramienta para llegar a mi subconsciente me
              permitieron bajar 60 kg y cambiar para siempre mi relación con la
              comida y con mi cuerpo.
            </p>
            <p className={TEXT_LEAD}>
              La <strong>respiración consciente</strong> fue el punto de
              inflexión: la herramienta que me permitió romper el ciclo de
              ansiedad y hambre emocional.
            </p>
            <p className={TEXT_LEAD}>
              Hoy dedico mi trabajo a acompañar a otras personas en ese mismo
              camino.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
