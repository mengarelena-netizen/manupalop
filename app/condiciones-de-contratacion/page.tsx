import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  LegalBlock,
  LegalCard,
  LegalContainer,
  LEGAL_INTRO,
} from "@/components/Legal";
import { HEADING, SECTION } from "@/lib/site-ui";

export const metadata: Metadata = {
  title: "Condiciones generales de contratación | Manu Palop",
  description:
    "Condiciones generales de contratacion del Club VIP de manupalop.com: proceso de compra, precios, renovacion, cancelacion y derecho de desistimiento.",
};

export default function CondicionesDeContratacion() {
  return (
    <>
      <SiteHeader />

      <main className={SECTION} id="condiciones-de-contratacion">
        <LegalContainer>
          <h1 className={HEADING}>
            Condiciones generales de contratación
          </h1>

          <p className={LEGAL_INTRO}>
            El presente documento regula las Condiciones Generales de
            Contratación aplicables a la adquisición de membresías, programas y
            suscripciones al Club VIP a través del sitio web{" "}
            <code>manupalop.com</code>. La contratación de cualquier producto o
            servicio en este sitio web implica la aceptación plena, informada y
            sin reservas por parte del Cliente de estas condiciones, las cuales
            complementan el <Link href="/aviso-legal">Aviso Legal</Link> y la{" "}
            <Link href="/politica-de-privacidad">Política de Privacidad</Link>.
          </p>

          <LegalCard>
            <h3>1. Identificación del prestador</h3>
            <ul>
              <li>
                <strong>Titular:</strong> Manuel Palop Pérez (en adelante,
                «Manu Palop»)
              </li>
              <li>
                <strong>NIF:</strong> 51102118M
              </li>
              <li>
                <strong>Domicilio:</strong> Pozuelo de Alarcón (28223 Madrid),
                España
              </li>
              <li>
                <strong>Sitio web:</strong> manupalop.com
              </li>
              <li>
                <strong>Email de contacto y soporte:</strong>{" "}
                <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>
              </li>
            </ul>
          </LegalCard>

          <LegalBlock>
            <h2>2. Objeto y descripción del servicio</h2>
            <p>
              A través del sitio web se ofrece acceso al Club VIP, un servicio
              digital de suscripción, entrenamiento y formación continua que
              incluye acceso a una comunidad privada, rutinas personalizadas de
              ejercicio/hábitos y contenidos exclusivos.
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>3. Proceso de compra y alta en el servicio</h2>
            <ul>
              <li>
                El usuario selecciona la suscripción y es redirigido a una
                pasarela de pago segura operada por Stripe, donde introduce sus
                datos identificativos, de facturación y el método de pago
                elegido.
              </li>
              <li>
                Una vez procesado el pago con éxito, el Cliente recibe una
                confirmación inmediata en pantalla y un correo electrónico con
                los detalles de la transacción y las instrucciones para acceder
                a la comunidad y a los contenidos del Club VIP.
              </li>
              <li>
                El contrato queda formalizado en lengua española en el momento
                en que se valida el cobro.
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock>
            <h2>4. Precios, impuestos y facturación</h2>
            <ul>
              <li>
                <strong>Precios:</strong> Los precios aplicables son los
                indicados de forma clara en la página de contratación en el
                momento de realizar la suscripción.
              </li>
              <li>
                <strong>Impuestos:</strong> Salvo indicación expresa en
                contrario, los precios incluyen el Impuesto sobre el Valor
                Añadido (IVA) legalmente aplicable según la legislación española
                y europea.
              </li>
              <li>
                <strong>Facturación:</strong> La factura se emite
                automáticamente en formato electrónico. Para cualquier problema
                puede escribir a{" "}
                <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock>
            <h2>5. Duración, pasarela de pago y renovaciones</h2>
            <ul>
              <li>
                <strong>Duración:</strong> La membresía al Club VIP tiene una
                duración de un (1) año completo a contar desde el momento en que
                se confirma el pago.
              </li>
              <li>
                <strong>Pasarela de pago:</strong> El abono se realiza mediante
                tarjeta bancaria u otros métodos habilitados a través de la
                plataforma de pago seguro Stripe Payments Europe, Ltd. Los datos
                bancarios viajan cifrados y nunca son almacenados por Manu
                Palop.
              </li>
              <li>
                <strong>Renovación automática:</strong> La suscripción es anual
                y renovable automáticamente. Al contratar, el Cliente autoriza
                expresamente a que, al cumplirse los doce meses, se cargue de
                forma automática la cuota anual correspondiente en el mismo
                método de pago facilitado, salvo que el Cliente manifieste su
                deseo de no renovar con anterioridad.
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock>
            <h2>6. Cancelación de la suscripción y bajas</h2>
            <ul>
              <li>
                El Cliente puede cancelar su suscripción al Club VIP en
                cualquier momento y sin penalización alguna.
              </li>
              <li>
                La solicitud de baja puede gestionarse a través del panel de
                gestión de suscripciones habilitado (portal de facturación de
                Stripe) o enviando un correo electrónico a{" "}
                <a href="mailto:hola@manupalop.com">hola@manupalop.com</a> con
                al menos 48 horas de antelación al siguiente cobro.
              </li>
              <li>
                <strong>Efectos de la cancelación:</strong> Tras solicitar la
                baja, el Cliente conservará el acceso completo a los contenidos
                del Club VIP hasta la finalización del periodo ya abonado.
                Llegada esa fecha, no se practicará ninguna renovación adicional
                y se retirará el acceso a los contenidos privados.
              </li>
              <li>
                La cancelación no da derecho a reembolsos retroactivos o
                parciales por los días u horas restantes del ciclo en curso.
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock>
            <h2>7. Derecho de desistimiento y renuncia informada</h2>
            <p>
              Conforme al artículo 102 del Real Decreto Legislativo 1/2007 (Ley
              General para la Defensa de los Consumidores y Usuarios), al
              consumidor le asiste con carácter general un plazo de catorce (14)
              días naturales para desistir de un contrato a distancia sin
              necesidad de justificación.
            </p>
            <p>
              <strong>
                Excepción legal aplicable al contenido digital:
              </strong>{" "}
              De conformidad con el artículo 103, letra m) del citado texto
              legal, el derecho de desistimiento no será aplicable al suministro
              de contenido digital que no se preste en un soporte material
              cuando la ejecución haya comenzado.
            </p>
            <p>
              Al completar la contratación del Club VIP y acceder de forma
              inmediata a los contenidos formativos, archivos o áreas privadas,
              el Cliente consiente expresamente el inicio de la ejecución del
              servicio y{" "}
              <strong>
                reconoce expresamente que pierde su derecho de desistimiento
              </strong>
              .
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>8. Propiedad intelectual de los materiales</h2>
            <p>
              Todos los materiales, audios, textos, descargables, clases y
              recursos facilitados dentro del Club VIP son titularidad exclusiva
              de Manuel Palop Pérez y están protegidos por las leyes de
              propiedad intelectual.
            </p>
            <p>
              El acceso otorgado es{" "}
              <strong>estrictamente personal, privado e intransferible</strong>.
              Queda prohibida la reproducción, distribución, cesión a terceros,
              comunicación pública, reventa o grabación de los contenidos sin
              autorización previa y por escrito de Manu Palop.
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>9. Descargo de responsabilidad</h2>
            <p>
              Los contenidos formativos, análisis y reflexiones compartidos en
              el Club VIP tienen una finalidad exclusivamente pedagógica,
              formativa y de divulgación de experiencias.{" "}
              <strong>
                No constituyen bajo ningún concepto asesoramiento financiero,
                legal, de inversión, fiscal ni recomendaciones
                médicas/sanitarias personalizadas.
              </strong>{" "}
              El Cliente asume toda la responsabilidad sobre las decisiones o
              acciones que emprenda.
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>10. Resolución de conflictos y legislación aplicable</h2>
            <p>
              Las presentes condiciones se rigen en todos sus extremos por la
              legislación española.
            </p>
            <p>
              En cumplimiento de lo dispuesto en el Reglamento (UE) 524/2013, se
              informa al Cliente de que la Comisión Europea dispone de una
              plataforma para la resolución de litigios en línea en materia de
              consumo, accesible a través del siguiente enlace:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p>
              Para cualquier controversia que pudiera derivarse de la validez,
              ejecución o interpretación de estas condiciones, las partes se
              someten a los juzgados y tribunales competentes de conformidad con
              la legislación de consumidores y usuarios aplicable.
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>Documentos relacionados</h2>
            <ul>
              <li>
                <Link href="/aviso-legal">Aviso legal</Link>
              </li>
              <li>
                <Link href="/politica-de-privacidad">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies">Política de cookies</Link>
              </li>
            </ul>
          </LegalBlock>
        </LegalContainer>
      </main>

      <SiteFooter />
    </>
  );
}
