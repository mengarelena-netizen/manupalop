import Container from "@/components/Container";

const SUB = "mb-3.5 text-[18px] text-ink-muted";

export default function HeroSection() {
  return (
    <Container as="section" className="text-left">
      <div className="mt-5 lg:mt-10">
        <div>
          <h1
            className="text-3xl lg:text-[54px]"
            data-reveal=""
            data-reveal-first
          >
            Perdí 60 kg. <br />
            Ahora te enseño el camino.
          </h1>
          <p className={SUB} data-reveal="" data-reveal-first>
            Sin dietas milagro. Sin atajos. Solo un método probado, una
            herramienta clave y el acompañamiento de alguien que ya estuvo
            exactamente donde tú estás hoy.
          </p>
          <p className={SUB} data-reveal="" data-reveal-first>
            La pérdida de peso es solo lo que se ve en el espejo. La verdadera
            transformación ocurre en tu cabeza: en cómo piensas, cómo respiras y
            cómo te relacionas con la comida.
          </p>
          <p className={SUB} data-reveal="" data-reveal-first>
            Por eso no necesitas más fuerza de voluntad, necesitas reprogramar
            la ansiedad y el hambre emocional desde la raíz. Solo así
            conseguirás un cambio duradero.
          </p>
        </div>
      </div>
    </Container>
  );
}
