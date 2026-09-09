"use client";

import { useState } from "react";
import { MotionButton } from "@/components/motion/primitives";
import { lift } from "@/components/motion/config";
import { btn } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

type Status = { cls: string; node: React.ReactNode };

const NOTE = "mt-2 text-[13px] text-ink-muted text-left desktop:text-center";
const FIELD = "grid gap-2 text-[14px] font-semibold";
const INPUT =
  "rounded-[8px] border border-line px-3.5 py-3 font-sans text-[15px] resize-y";

/* El envio pasa por /api/contacto, que manda el correo con Resend. El
   destinatario y el remitente se configuran con variables de entorno en
   Vercel, no en este archivo. */
export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<Status>({ cls: NOTE, node: null });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    setSending(true);
    setStatus({ cls: NOTE, node: "Enviando…" });

    try {
      const campos = Object.fromEntries(new FormData(form).entries());
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campos),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setStatus({
        cls: cn(NOTE, "font-semibold text-[#1f7a4d]"),
        node: "Mensaje enviado. Te responderé lo antes posible.",
      });
      form.reset();
    } catch {
      // Sin esto el usuario creeria que el mensaje ha salido cuando no ha salido.
      setStatus({
        cls: cn(NOTE, "font-semibold text-[#b3261e]"),
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
      className="grid gap-[18px] rounded-card bg-surface-alt p-8"
      id="contactForm"
      name="contacto"
      method="POST"
      onSubmit={onSubmit}
    >
      {/* Trampa antispam: los bots la rellenan, las personas no la ven */}
      <p className="hidden">
        <label>
          No rellenar: <input name="bot-field" />
        </label>
      </p>

      <label className={FIELD}>
        Nombre
        <input className={INPUT} type="text" name="nombre" required />
      </label>
      <label className={FIELD}>
        Email
        <input className={INPUT} type="email" name="email" required />
      </label>
      <label className={FIELD}>
        Mensaje
        <textarea className={INPUT} name="mensaje" rows={4} required></textarea>
      </label>
      <MotionButton
        type="submit"
        className={cn(
          btn(),
          "mx-0 mt-1 block w-fit disabled:cursor-not-allowed disabled:opacity-60 desktop:mx-auto",
        )}
        disabled={sending}
        {...lift}
      >
        {sending ? "Enviando…" : "Enviar mensaje"}
      </MotionButton>
      <p
        className={status.cls}
        id="contactNote"
        role="status"
        aria-live="polite"
      >
        {status.node}
      </p>
    </form>
  );
}
