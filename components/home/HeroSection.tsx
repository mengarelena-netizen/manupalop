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
            Bajé 60 kg. Cambié mi mente. <br />Y transformé mi vida.
          </h1>
          <p className={SUB} data-reveal="">
            Después de más de 20 años estuve atrapado en hábitos que no me
            hacían feliz. Llegué a pesar 140 kg y a vivir con ansiedad
            prácticamente cada día.
          </p>
          <p className={SUB} data-reveal="">
            Hasta que entendí que el problema no estaba únicamente en lo que
            comía, sino también en cómo pensaba, cómo gestionaba mis emociones y
            cómo me relacionaba conmigo mismo.
          </p>
          <p className={SUB} data-reveal="">
            Hoy quiero enseñarte el camino para que tú también puedas
            transformar tu cuerpo y tu mente.
          </p>
          <p className="mb-3.5 text-[18px] font-bold text-ink" data-reveal="">
            Tu cuerpo es el comienzo. Tu transformación es el destino.
          </p>
        </div>
      </div>
    </Container>
  );
}
