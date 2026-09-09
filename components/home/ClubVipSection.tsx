import CheckoutButton from "@/components/CheckoutButton";
import Container from "@/components/Container";
import { STRIPE_CHECKOUT_URL } from "@/lib/constants";
import { btn, CARD, LEAD, SECTION } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const INCLUYE = [
  "Plan de pérdida de peso personalizado",
  "Respiraciones conscientes para bajar de peso",
  "Seguimiento y revisión periódica de tu progreso",
  "Acompañamiento directo por WhatsApp",
  "Comunidad privada con otras personas en el mismo proceso",
  "Contenido y directos exclusivos para miembros",
];

const CHECK_ITEM =
  "relative pl-[30px] text-[16px] before:absolute before:top-0 before:left-0 before:flex before:h-5 before:w-5 before:items-center before:justify-center before:rounded-full before:bg-brand-soft before:text-[12px] before:font-extrabold before:text-brand-dark before:content-['✓']";

export default function ClubVipSection() {
  return (
    <section className={cn(SECTION, "bg-surface-alt")} id="ruge">
      <Container className="max-w-[760px] text-left">
        <h2 className="mb-6">
          Mi acompañamiento para transformar tu cuerpo y tu mente
        </h2>
        <div className={cn(LEAD, "flex flex-col gap-6")}>
          <p className="m-0">
            No necesitas más información, necesitas dirección, claridad y
            alguien que haya recorrido este camino antes.
          </p>
          <p className="m-0">
            Mi club VIP es un espacio donde trabajamos juntos el método, la
            mentalidad y los hábitos hasta que ya no me necesites.
          </p>
        </div>
        <ul className="mx-0 mt-6 mb-8 inline-grid list-none gap-3 p-0 text-left desktop:mx-auto">
          {INCLUYE.map((item) => (
            <li key={item} className={CHECK_ITEM}>
              {item}
            </li>
          ))}
        </ul>

        <div
          className={cn(
            CARD,
            "mx-auto flex max-w-[360px] flex-col items-center gap-4 bg-surface px-7 py-8 text-center",
          )}
        >
          <div className="text-[22px] font-extrabold">
            <span className="text-[32px] text-brand-dark">597€</span> / año
          </div>
          <CheckoutButton
            className={btn()}
            fallbackHref={STRIPE_CHECKOUT_URL}
          >
            Quiero entrar al Club VIP
          </CheckoutButton>
        </div>
      </Container>
    </section>
  );
}
