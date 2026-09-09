import CheckoutButton from "@/components/CheckoutButton";
import Container from "@/components/Container";
import { STRIPE_CHECKOUT_URL } from "@/lib/constants";
import { btn } from "@/lib/site-ui";

export default function FinalCtaSection() {
  return (
    <section className="bg-brand py-24 text-center">
      <Container>
        <h2
          className="mx-auto mt-0 mb-3 max-w-[720px] text-on-brand"
          data-reveal=""
        >
          Tu cambio empieza hoy.
        </h2>
        <p
          className="mx-auto mt-0 mb-8 max-w-[640px] font-sans text-[20px] font-medium text-on-brand not-italic"
          data-reveal=""
        >
          Deja de buscar atajos y aprende el camino.
        </p>
        <div data-reveal="zoom">
          <CheckoutButton
            className={btn({ variant: "dark" })}
            fallbackHref={STRIPE_CHECKOUT_URL}
          >
            Entrar al Club VIP
          </CheckoutButton>
        </div>
      </Container>
    </section>
  );
}
