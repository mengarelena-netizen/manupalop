import CheckoutButton from "@/components/CheckoutButton";
import Container from "@/components/Container";
import { STRIPE_CHECKOUT_URL } from "@/lib/constants";
import { btn, CARD, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const INCLUYE = [
  "Plan de entrenamiento y nutrición",
  "Respiraciones conscientes para abandonar tus malos hábitos",
  "Seguimiento y revisión periódica de tu progreso",
  "Acompañamiento directo por WhatsApp",
  "Comunidad privada para apoyarnos",
  "Contenido y directos exclusivos para miembros",
];

const CHECK_ITEM =
  "relative pl-[30px] text-[16px] before:absolute before:top-0 before:left-0 before:flex before:h-5 before:w-5 before:items-center before:justify-center before:rounded-full before:bg-brand-soft before:text-[12px] before:font-extrabold before:text-brand-dark before:content-['✓']";

export default function ClubVipSection() {
  return (
    <section className={cn(SECTION, "bg-surface-alt")} id="ruge">
      <Container className="max-w-[760px] text-left">
        <h2 className="mb-6" data-reveal="">
          Mi acompañamiento para transformar tu cuerpo y tu mente
        </h2>
        <div className={cn(LEAD, "flex flex-col gap-6")} data-reveal="">
          <p className="m-0">
            No necesitas más información, necesitas dirección, claridad y
            alguien que haya recorrido este camino antes.
          </p>
          <p className="m-0">
            El Club VIP es un espacio en el que trabajamos juntos en tu
            transformación física y personal.
          </p>
          <p className="m-0">
            No se trata solamente de perder peso, sino de construir una forma de
            vivir que te permita sentirte mejor contigo mismo y mantener tus
            resultados.
          </p>
        </div>
        <ul className="mx-0 mt-6 mb-8 inline-grid list-none gap-3 p-0 text-left desktop:mx-auto">
          {INCLUYE.map((item) => (
            <li key={item} className={CHECK_ITEM} data-reveal="">
              {item}
            </li>
          ))}
        </ul>

        <div
          className={cn(
            CARD,
            "mx-auto flex max-w-[360px] flex-col items-center gap-4 bg-surface px-7 py-8 text-center",
          )}
          data-reveal="zoom"
        >
          <div className="text-[22px] font-extrabold">
            <span className="text-[32px] text-brand-dark">597€</span> / año
          </div>
          <CheckoutButton className={btn()} fallbackHref={STRIPE_CHECKOUT_URL}>
            Quiero entrar al Club VIP
          </CheckoutButton>
        </div>
      </Container>
    </section>
  );
}
