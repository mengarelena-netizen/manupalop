import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoFacade from "@/components/VideoFacade";
import PhotoCarousels from "@/components/PhotoCarousels";

export const metadata: Metadata = {
  title: "Manu Palop | Club VIP RUGE",
  description:
    "Perdí 60 kg y ahora acompaño a otras personas a lograrlo. Únete al Club VIP RUGE.",
};

const STRIPE = "https://buy.stripe.com/5kQdRacXN0Bs2ST2on2ZO1c";

const ANTES = [
  { src: "/images/antes-1.jpg", alt: "Manu Palop con 140 kg, en la playa" },
  { src: "/images/antes-2.jpg", alt: "Manu Palop con 140 kg, en la escalera" },
  { src: "/images/antes-3.jpg", alt: "Manu Palop con 140 kg, en la ciudad" },
  { src: "/images/antes-4.JPG", alt: "Manu Palop con 140 kg, en un acantilado" },
  { src: "/images/antes-5.jpg", alt: "Manu Palop con 140 kg, junto a un faro" },
  { src: "/images/antes-6.jpg", alt: "Manu Palop con 140 kg, en el estadio Bernabéu" },
  { src: "/images/antes-7.JPG", alt: "Manu Palop con 140 kg, el día de su graduación" },
];

const DESPUES = [
  { src: "/images/despues-1.jpg", alt: "Manu Palop con 80 kg, de viaje en Nueva York" },
  { src: "/images/despues-2.jpg", alt: "Manu Palop con 80 kg, disfrutando de una comida equilibrada" },
  { src: "/images/despues-3.jpg", alt: "Manu Palop con 80 kg, jugando al pádel" },
  { src: "/images/despues-4.jpg", alt: "Manu Palop con 80 kg, firmando ejemplares de su libro" },
  { src: "/images/despues-5.jpg", alt: "Manu Palop con 80 kg, retrato de estudio" },
  { src: "/images/despues-6.jpg", alt: "Manu Palop con 80 kg, retrato de estudio" },
  { src: "/images/despues-7.jpg", alt: "Manu Palop con 80 kg, jugando al tenis" },
];

const TESTIMONIOS = [
  {
    quote:
      "“He completado el programa TEMIS con Manu y no solo he visto cambios en mi cuerpo, sobre todo en la manera de relacionarme conmigo misma. Sigo en contacto con él porque es una gran fuente de inspiración.”",
    name: "Ana Antelm",
    year: "· 2025",
  },
  {
    quote:
      "“Gracias a Manu he perdido los 40 kg que me sobraban. Es la primera vez en mi vida que siento que estoy haciendo lo correcto por mi cuerpo. Hoy, un año después, sigo concienciada y mejorando día a día.”",
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

export default function Home() {
  return (
    <>
      <SiteHeader home />

      {/* ===================== HERO ===================== */}
      <section className="hero">
        <div className="container hero-inner hero-inner-text-only">
          <div className="hero-text">
            <h1>
              Perdí 60 kg. <br />
              Ahora te enseño el camino.
            </h1>
            <p className="hero-sub">
              Sin dietas milagro. Sin atajos. Solo un método probado, una
              herramienta clave y el acompañamiento de alguien que ya estuvo
              exactamente donde tú estás hoy.
            </p>
            <p className="hero-support">
              La pérdida de peso es solo lo que se ve en el espejo. La verdadera
              transformación ocurre en tu cabeza: en cómo piensas, cómo respiras y
              cómo te relacionas con la comida.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== ANTES Y DESPUÉS ===================== */}
      <section className="section" id="antes-despues">
        <div className="container">
          <p className="section-lead">
            El cambio físico es la consecuencia visible de un cambio mental
            profundo. No necesitas más fuerza de voluntad; necesitas reprogramar
            la ansiedad y el hambre emocional desde la raíz. Solo así conseguirás
            un cambio duradero.
          </p>

          <div className="compare-main">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/antes-despues-principal.jpg"
              alt="Manu Palop antes y después de perder 60 kg"
            />
          </div>

          <div className="compare-strip">
            {["ad-2", "ad-3", "ad-4"].map((n) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={n}
                src={`/images/${n}.jpg`}
                alt="Transformación de Manu Palop, antes y después"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RUGE / CLUB VIP ===================== */}
      <section className="section section-alt" id="ruge">
        <div className="container ruge-content-full">
          <h2>Mi acompañamiento para transformar tu cuerpo y tu mente</h2>
          <div className="section-lead ruge-lead">
            <p>
              No necesitas más información, necesitas dirección, claridad y
              alguien que haya recorrido este camino antes.
            </p>
            <p>
              es mi club de acompañamiento: un espacio donde trabajamos juntos el
              método, la mentalidad y los hábitos hasta que ya no me necesites.
            </p>
          </div>
          <ul className="check-list">
            <li>Método TEMIS completo aplicado a tu caso</li>
            <li>Respiraciones conscientes para bajar de peso</li>
            <li>Seguimiento y revisión periódica de tu progreso</li>
            <li>Acompañamiento directo por WhatsApp</li>
            <li>Comunidad privada con otras personas en el mismo proceso</li>
            <li>Contenido y directos exclusivos para miembros</li>
          </ul>

          <div className="price-card">
            <div className="price-tag">
              <span>597€</span> / año
            </div>
            <a href={STRIPE} target="_blank" rel="noopener" className="btn btn-accent">
              Quiero unirme a RUGE
            </a>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIOS ===================== */}
      <section className="section" id="testimonios">
        <div className="container">
          <h2 className="section-title">Ellos han confiado en mí</h2>
          <p className="section-lead">Y yo les he ayudado a transformar sus vidas.</p>

          <div className="video-showcase">
            <VideoFacade
              videoId="OLIdk7JJBv0"
              poster="/images/testimonio-video-poster.jpg"
              posterAlt="Clientes del Club VIP RUGE contando su experiencia en vídeo"
              ariaLabel="Reproducir el vídeo con los testimonios de clientes"
              width={720}
              height={1272}
            />
            <p className="video-caption">
              Testimonios en vídeo de clientes del Club VIP RUGE
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIOS.map((t) => (
              <blockquote className="testimonial" key={t.name}>
                <p>{t.quote}</p>
                <cite>
                  {t.name} <span>{t.year}</span>
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== QUIÉN SOY ===================== */}
      <section className="section section-alt" id="quien-soy">
        <div className="container">
          <div className="quien-soy-grid">
            <div className="quien-soy-text">
              <p className="section-lead">
                Pasé dos décadas con obesidad probando todos los métodos del
                mercado, hasta que entendí que la solución no estaba ahí fuera,
                sino aquí dentro.
              </p>
              <p className="section-lead">
                Un método y una herramienta para llegar a mi subconsciente me
                permitieron bajar 60 kg y cambiar para siempre mi relación con la
                comida y con mi cuerpo.
              </p>
              <p className="section-lead">
                La <strong>respiración consciente</strong> fue el punto de
                inflexión: la herramienta que me permitió romper el ciclo de
                ansiedad y hambre emocional.
              </p>
              <p className="section-lead">
                Hoy dedico mi trabajo a acompañar a otras personas en ese mismo
                camino.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="quien-soy-img"
              src="/images/quien-soy-feature.jpg"
              alt="Manu Palop practicando respiración consciente"
            />
          </div>
        </div>
      </section>

      {/* ===================== PARA QUIÉN ES RUGE ===================== */}
      <section className="section" id="para-quien">
        <div className="container">
          <div className="programa-content">
            <h2>
              El último programa de pérdida de peso que vas a contratar en tu
              vida.
            </h2>
            <p className="section-lead">
              El objetivo de RUGE no es que dependas de mí de por vida, sino darte
              las herramientas y el acompañamiento para que dentro de 12 meses ya
              no me necesites.
            </p>

            <div className="fit-grid">
              <div className="fit-card fit-no">
                <p className="fit-label">NO es para ti si:</p>
                <p>
                  Buscas perder 10 kg en 2 semanas pasando hambre o tomando una
                  pastilla mágica.
                </p>
              </div>
              <div className="fit-card fit-yes">
                <p className="fit-label">SÍ es para ti si:</p>
                <p>
                  Estás dispuesto a mirar hacia adentro, trabajar tus emociones y
                  comprometerte con tu mejor versión.
                </p>
              </div>
            </div>

            <p className="carousels-intro">
              Mira cómo ha cambiado mi vida e imagina todo lo que puedes conseguir
              si empiezas ahora:
            </p>
          </div>

          <PhotoCarousels antes={ANTES} despues={DESPUES} />
        </div>
      </section>

      {/* ===================== CIERRE FINAL ===================== */}
      <section className="cta-final">
        <div className="container">
          <h2>Tu cambio empieza hoy.</h2>
          <p className="cta-final-sub">Deja de buscar atajos y aprende el camino.</p>
          <a href={STRIPE} target="_blank" rel="noopener" className="btn btn-dark">
            Entrar al Club VIP RUGE
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
