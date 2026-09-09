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
  title: "Política de privacidad | Manu Palop",
  description:
    "Politica de privacidad de manupalop.com: responsable del tratamiento, datos recabados, finalidad, conservacion, destinatarios y derechos.",
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <SiteHeader />

      <main className={SECTION} id="politica-privacidad">
        <LegalContainer>
          <h1 className={HEADING}>Política de privacidad</h1>

          <p className={LEGAL_INTRO}>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo
            y del Consejo (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD), te
            informamos de forma transparente sobre el tratamiento de tus datos
            personales en <code>manupalop.com</code>.
          </p>

          <LegalCard>
            <h3>1. Responsable del tratamiento</h3>
            <ul>
              <li>
                <strong>Titular:</strong> Manuel Palop Pérez (en adelante,
                «Manu Palop»)
              </li>
              <li>
                <strong>NIF:</strong> 51102118M
              </li>
              <li>
                <strong>Domicilio:</strong> Pozuelo de Alarcón (Madrid), España
              </li>
              <li>
                <strong>Email de contacto:</strong>{" "}
                <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>
              </li>
              <li>
                <strong>Actividad:</strong> Servicios de formación, mentoría y
                divulgación online.
              </li>
            </ul>
          </LegalCard>

          <LegalBlock>
            <h2>2. Datos recabados y origen</h2>
            <p>
              Recopilamos los datos estrictamente necesarios a través de:
            </p>
            <ul>
              <li>
                <strong>Formulario de newsletter:</strong> Correo electrónico.
              </li>
              <li>
                <strong>Formulario de contacto:</strong> Nombre, correo
                electrónico y cualquier información que decidas incluir en el
                cuerpo del mensaje.
              </li>
              <li>
                <strong>Pago para entrar al Club VIP:</strong> Datos
                identificativos y de facturación (nombre y apellidos, DNI/NIF,
                correo electrónico y dirección fiscal) necesarios para gestionar
                la suscripción y emitir la factura. Los datos de pago con
                tarjeta son gestionados directamente por la pasarela de pago
                segura Stripe; nosotros nunca tenemos acceso a los datos
                completos de tu tarjeta ni los almacenamos.
              </li>
              <li>
                <strong>Navegación web:</strong> Dirección IP (anonimizada),
                hábitos de navegación y analítica mediante cookies (gestionadas
                según nuestra{" "}
                <Link href="/politica-de-cookies">Política de Cookies</Link>).
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock>
            <h2>3. Finalidad y legitimación del tratamiento</h2>
            <ul>
              <li>
                <strong>
                  Envío de newsletter y comunicaciones comerciales:
                </strong>{" "}
                Mantenerte informado sobre novedades, contenidos, reflexiones y
                promociones.
                <br />
                <em>
                  Base legal: Consentimiento expreso del usuario (art. 6.1.a
                  RGPD).
                </em>
              </li>
              <li>
                <strong>Gestión de llamadas y consultas:</strong> Atender tus
                solicitudes y agendar sesiones previas informativas.
                <br />
                <em>
                  Base legal: Aplicación de medidas precontractuales o interés
                  legítimo (art. 6.1.b / 6.1.f RGPD).
                </em>
              </li>
              <li>
                <strong>Gestión de clientes y facturación:</strong> Proporcionar
                acceso al programa de formación, seguimiento de mentorías y
                emisión de facturas.
                <br />
                <em>
                  Base legal: Ejecución de un contrato de servicios (art. 6.1.b
                  RGPD) y cumplimiento de obligaciones tributarias (art. 6.1.c
                  RGPD).
                </em>
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock>
            <h2>4. Conservación de los datos</h2>
            <ul>
              <li>
                <strong>Suscriptores de la newsletter:</strong> Hasta que
                solicites la baja (disponible en el enlace de pie de cada
                email).
              </li>
              <li>
                <strong>Solicitudes de llamada y contacto:</strong> Durante el
                tiempo necesario para atender tu petición o hasta 12 meses tras
                el último contacto sin contratación.
              </li>
              <li>
                <strong>Clientes:</strong> Mientras dure la relación contractual
                y, posteriormente, durante los plazos legalmente exigidos por la
                legislación fiscal y civil española (mínimo 4 a 6 años).
              </li>
            </ul>
          </LegalBlock>

          <LegalBlock>
            <h2>5. Destinatarios y transferencias internacionales</h2>
            <p>
              No vendemos ni cedemos tus datos personales a terceros. Para
              prestar nuestros servicios de forma segura y eficiente,
              utilizamos herramientas tecnológicas de proveedores de confianza
              que actúan en calidad de encargados del tratamiento:
            </p>
            <ul>
              <li>
                <strong>Email marketing y gestión de publicaciones:</strong>{" "}
                Substack Inc. (EE. UU.).
              </li>
              <li>
                <strong>Pasarela de pago y facturación:</strong> Stripe Payments
                Europe, Ltd. (Irlanda / EE. UU.).
              </li>
              <li>
                <strong>Analítica web:</strong> Google Ireland Ltd. / Google LLC
                (Irlanda / EE. UU.).
              </li>
              <li>
                <strong>Alojamiento web e infraestructura:</strong> Vercel Inc.
                (EE. UU.).
              </li>
            </ul>
            <p>
              Cuando estos proveedores almacenan o tratan datos fuera del
              Espacio Económico Europeo (particularmente en EE. UU.), las
              transferencias internacionales se realizan de conformidad con la
              normativa europea, amparadas bajo el EU-U.S. Data Privacy
              Framework (Marco de Privacidad de Datos UE-EE. UU.) o mediante la
              suscripción de Cláusulas Contractuales Tipo (SCC) aprobadas por la
              Comisión Europea, garantizando un nivel de protección equivalente
              al exigido por el RGPD.
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>6. Derechos del usuario</h2>
            <p>Puedes ejercitar en cualquier momento tus derechos de:</p>
            <ul>
              <li>Acceso, rectificación o supresión de tus datos.</li>
              <li>Limitación u oposición a su tratamiento.</li>
              <li>Portabilidad de tus datos.</li>
              <li>Retirar el consentimiento prestado en cualquier momento.</li>
            </ul>
            <p>
              Para ejercerlos, envía un correo a{" "}
              <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>{" "}
              indicando tu petición junto con una copia o documento acreditativo
              de tu identidad.
            </p>
            <p>
              Asimismo, te informamos de que tienes derecho a presentar una
              reclamación ante la autoridad de control competente en materia de
              protección de datos si consideras vulnerados tus derechos: la
              Agencia Española de Protección de Datos (AEPD) en{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.aepd.es
              </a>
              .
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>7. Seguridad de la información</h2>
            <p>
              Aplicamos medidas técnicas y organizativas adecuadas para proteger
              tus datos contra accesos no autorizados, pérdidas o alteraciones
              ilícitas. En caso de que se detectara cualquier brecha de
              seguridad que entrañe un riesgo para tus derechos, te será
              notificada a la mayor brevedad conforme a la normativa vigente.
            </p>
          </LegalBlock>

          <LegalBlock>
            <h2>Documentos relacionados</h2>
            <ul>
              <li>
                <Link href="/aviso-legal">Aviso legal</Link>
              </li>
              <li>
                <Link href="/politica-de-cookies">Política de cookies</Link>
              </li>
              <li>
                <Link href="/condiciones-de-contratacion">
                  Condiciones generales de contratación
                </Link>
              </li>
            </ul>
          </LegalBlock>
        </LegalContainer>
      </main>

      <SiteFooter />
    </>
  );
}
