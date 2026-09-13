"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/Container";
import { MotionA } from "@/components/motion/primitives";
import {
  FADE,
  lift,
  SPRING_PANEL,
  SPRING_TAP,
} from "@/components/motion/config";
import { useMediaQuery } from "@/lib/use-media-query";
import { btn } from "@/lib/site-ui";
import { cn } from "@/lib/utils";

const NAV_LINK = "block whitespace-nowrap hover:text-brand-dark";

/** Cabecera con el menu movil. Sustituye al bloque "Menu movil" de script.js. */
export default function SiteHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  // Solo se anima lo que pide el usuario. Cuando motion toma el control del
  // transform al hidratar, o al cruzar el corte de 900px, el cajon se coloca
  // de golpe en vez de verse cruzar la pantalla.
  const [animar, setAnimar] = useState(false);
  const close = () => {
    setAnimar(true);
    setOpen(false);
  };
  // El cajon solo se desplaza en movil; en escritorio la nav va en su sitio.
  const isDrawer = useMediaQuery("(max-width: 900px)");
  const known = isDrawer !== null;

  useEffect(() => {
    if (!open) return;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    const { overflow, paddingRight } = document.body.style;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [open]);

  // En la home los anclas son internos; en el resto vuelven a la portada.
  const base = home ? "" : "/";

  // El menu movil bloquea el scroll del body mientras esta abierto; esperamos
  // a que el efecto lo libere antes de mover la pagina.
  const afterMenuCloses = (fn: () => void) =>
    requestAnimationFrame(() => requestAnimationFrame(fn));

  // En la home, "Home" y el logo suben a la primera seccion en vez de recargar.
  const goTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    close();
    if (!home) return;
    e.preventDefault();
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    afterMenuCloses(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  // Anclas de la home. El scroll suave se hace aqui porque html ya no lleva
  // scroll-behavior: smooth (rompia el scroll de Next al cambiar de ruta).
  const goSection =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      close();
      if (!home) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      history.replaceState(null, "", `#${id}`);
      afterMenuCloses(() =>
        el.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    };

  return (
    <header
      className="sticky top-0 z-100 border-b border-line transition-[top] duration-[0.35s] ease-[ease] before:absolute before:inset-0 before:-z-10 before:bg-[rgba(255,255,255,0.92)] before:backdrop-blur-[8px] before:content-[''] motion-reduce:transition-none"
      id="top"
    >
      <Container className="flex h-[var(--header-h)] max-w-[1024px] items-center gap-6">
        <Link
          href="/"
          className="text-[20px] font-extrabold tracking-[0.02em] whitespace-nowrap"
          onClick={goTop}
        >
          MANU <span className="text-brand">PALOP</span>
        </Link>

        <motion.nav
          className={cn(
            "fixed top-0 right-0 left-auto z-120 h-[100dvh] w-[65%] max-w-[360px] min-w-[260px] flex-col items-stretch gap-[22px] overflow-y-auto border-l border-line bg-white px-7 pt-21 pb-8 text-left text-[18px] shadow-[-14px_0_34px_rgba(23,20,15,0.16)]",
            "desktop:static desktop:z-auto desktop:ml-auto desktop:h-auto desktop:w-auto desktop:max-w-none desktop:min-w-0 desktop:flex-row desktop:items-center desktop:gap-[26px] desktop:overflow-visible desktop:border-0 desktop:bg-transparent desktop:p-0 desktop:text-[15px] desktop:font-semibold desktop:shadow-none",
            "flex [transform:translateX(100%)] desktop:[transform:none]",
          )}
          id="mainNav"
          initial={false}
          // Antes de hidratar no se toca el transform: manda la clase, que ya
          // deja el cajon fuera de pantalla en movil y en su sitio en escritorio.
          animate={known ? { x: isDrawer && !open ? "100%" : 0 } : undefined}
          transition={animar ? SPRING_PANEL : { duration: 0 }}
        >
          <button
            className="absolute top-[18px] right-5 h-10 w-10 cursor-pointer border-0 bg-transparent p-0 text-[30px] leading-none text-ink desktop:hidden"
            aria-label="Cerrar menú"
            onClick={close}
          >
            &times;
          </button>
          <Link href="/" className={NAV_LINK} onClick={goTop}>
            Home
          </Link>
          <a
            href={`${base}#ruge`}
            className={NAV_LINK}
            onClick={goSection("ruge")}
          >
            Club VIP
          </a>
          <a
            href={`${base}#testimonios`}
            className={NAV_LINK}
            onClick={goSection("testimonios")}
          >
            Testimonios
          </a>
          <Link href="/diario" className={NAV_LINK} onClick={close}>
            Diario
          </Link>
          <Link href="/contacto" className={NAV_LINK} onClick={close}>
            Contacto
          </Link>
        </motion.nav>

        <MotionA
          href={`${base}#ruge`}
          className={cn(
            btn(),
            "ml-3 hidden px-[22px] py-2.5 text-[14px] whitespace-nowrap desktop:inline-block",
          )}
          onClick={goSection("ruge")}
          {...lift}
        >
          Club VIP
        </MotionA>

        <motion.button
          className="ml-auto flex h-8 w-8 cursor-pointer flex-col justify-center gap-[5px] border-0 bg-transparent p-0 desktop:hidden"
          id="navToggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => {
            setAnimar(true);
            setOpen((v) => !v);
          }}
          whileTap={{ scale: 0.88 }}
          transition={SPRING_TAP}
        >
          <span className="block h-0.5 rounded-[2px] bg-ink" />
          <span className="block h-0.5 rounded-[2px] bg-ink" />
          <span className="block h-0.5 rounded-[2px] bg-ink" />
        </motion.button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed top-0 left-0 z-110 h-[100dvh] w-full bg-[rgba(23,20,15,0.45)] desktop:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={FADE}
            onClick={close}
            aria-hidden="true"
          />
        ) : null}
      </AnimatePresence>
    </header>
  );
}
