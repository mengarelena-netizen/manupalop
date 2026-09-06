import Stripe from "stripe";

export async function POST(request: Request) {
  const clave = process.env.STRIPE_SECRET_KEY;
  const precio = process.env.STRIPE_PRICE_ID;

  if (!clave || !precio) {
    console.error("STRIPE_SECRET_KEY o STRIPE_PRICE_ID no estan configuradas");
    return Response.json({ error: "Pago no disponible" }, { status: 500 });
  }

  const base =
    process.env.SITE_URL ??
    request.headers.get("origin") ??
    new URL(request.url).origin;

  try {
    const stripe = new Stripe(clave);
    const tarifa = await stripe.prices.retrieve(precio);

    const sesion = await stripe.checkout.sessions.create({
      ui_mode: "embedded_page",
      mode: tarifa.recurring ? "subscription" : "payment",
      line_items: [{ price: precio, quantity: 1 }],
      locale: "es",
      return_url: `${base}/gracias?session_id={CHECKOUT_SESSION_ID}`,
    });

    return Response.json({ clientSecret: sesion.client_secret });
  } catch (error) {
    console.error("Stripe checkout:", error);
    return Response.json(
      { error: "No se ha podido iniciar el pago" },
      { status: 502 },
    );
  }
}
