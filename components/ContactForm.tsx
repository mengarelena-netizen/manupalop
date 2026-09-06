"use client";

import { useState } from "react";

type Status = { cls: string; node: React.ReactNode };

/* El envio pasa por /api/contacto, que manda el correo con Resend. El
   destinatario y el remitente se configuran con variables de entorno en
   Vercel, no en este archivo. */
export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ cls: "form-note", node: null });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setSending(true);
    setStatus({ cls: "form-note", node: "Enviando…" });

    try {
      const campos = Object.fromEntries(new FormData(form).entries());
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campos),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus({
        cls: "form-note is-ok",
        node: "Mensaje enviado. Te responderé lo antes posible.",
      });
      form.reset();
    } catch {
      // Sin esto el usuario creeria que el mensaje ha salido cuando no ha salido.
      setStatus({
        cls: "form-note is-error",
        node: (
          <>
            No se ha podido enviar. Escríbeme a{" "}
            <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.
          </>
        ),
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      className="contact-form"
      id="contactForm"
      name="contacto"
      method="POST"
      onSubmit={onSubmit}
    >
      {/* Trampa antispam: los bots la rellenan, las personas no la ven */}
      <p style={{ display: "none" }}>
        <label>
          No rellenar: <input name="bot-field" />
        </label>
      </p>

      <label>
        Nombre
        <input type="text" name="nombre" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Mensaje
        <textarea name="mensaje" rows={4} required></textarea>
      </label>
      <button type="submit" className="btn btn-accent" disabled={sending}>
        {sending ? "Enviando…" : "Enviar mensaje"}
      </button>
      <p className={status.cls} id="contactNote" role="status" aria-live="polite">
        {status.node}
      </p>
    </form>
  );
}
