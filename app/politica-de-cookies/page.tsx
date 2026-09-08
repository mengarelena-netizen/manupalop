import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieSettingsButton from "@/components/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Política de cookies | Manu Palop",
  description:
    "Politica de cookies de manupalop.com: tipos de cookies, relacion de cookies utilizadas y como gestionar o revocar tu consentimiento.",
};

export default function PoliticaDeCookies() {
  return (
    <>
      <SiteHeader />

      <main className="section" id="politica-de-cookies">
        <div className="container legal-container">
          <h1 className="section-title">Política de cookies</h1>

          <p className="legal-intro">
            En cumplimiento del artículo 22.2 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE), y del Reglamento General de Protección de
            Datos (RGPD), esta política informa sobre el uso de cookies en el
            sitio web <code>manupalop.com</code>.
          </p>

          <div className="legal-block">
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Una cookie es un pequeño fichero de texto que se descarga en el
              navegador del usuario al acceder a determinadas páginas web.
              Permite a un sitio web almacenar y recuperar información sobre los
              hábitos de navegación de un usuario o de su equipo para mejorar el
              servicio y la experiencia de uso.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Tipos de cookies utilizadas en manupalop.com</h2>
            <ul>
              <li>
                <strong>
                  Cookies técnicas o necesarias (exentas de consentimiento):
                </strong>{" "}
                Son aquellas imprescindibles para el funcionamiento correcto de
                la web, la navegación fluida, la seguridad de la plataforma y el
                proceso técnico de pago a través de pasarelas seguras (como
                Stripe). No requieren el consentimiento previo del usuario para
                su instalación.
              </li>
              <li>
                <strong>Cookies analíticas o de medición:</strong> Son aquellas
                tratadas por nosotros o por terceros (como Google Analytics)
                para cuantificar el número de usuarios, analizar la interacción
                con las páginas y medir el rendimiento del contenido con fines
                estadísticos y de mejora del sitio web. Solo se instalan si el
                usuario las acepta expresamente a través del banner de
                configuración.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. Relación de cookies utilizadas</h2>

            <h3 className="legal-subtitle">Cookies propias y técnicas</h3>
            <ul>
              <li>
                <strong>Nombre / Origen:</strong> Vercel / manupalop.com
              </li>
              <li>
                <strong>Finalidad:</strong> Gestión de sesión técnica, entrega
                optimizada de contenidos e infraestructura del servidor.
              </li>
              <li>
                <strong>Duración:</strong> Sesión o temporal.
              </li>
            </ul>

            <h3 className="legal-subtitle">
              Cookies analíticas de terceros (Google Analytics)
            </h3>
            <ul>
              <li>
                <strong>Proveedor:</strong> Google Ireland Ltd. / Google LLC.
              </li>
              <li>
                <strong>Nombres habituales:</strong> <code>_ga</code>,{" "}
                <code>_ga_*</code>.
              </li>
              <li>
                <strong>Finalidad:</strong> Distinguir a los usuarios y generar
                estadísticas agregadas y anónimas sobre las visitas y páginas
                más leídas.
              </li>
              <li>
                <strong>Duración:</strong> Persistentes (hasta 2 años).
              </li>
              <li>
                <strong>Transferencias internacionales:</strong> Google puede
                tratar datos fuera del Espacio Económico Europeo al amparo del
                marco EU-U.S. Data Privacy Framework.
              </li>
            </ul>

            <h3 className="legal-subtitle">
              Cookies de pasarela de pago (Stripe)
            </h3>
            <ul>
              <li>
                <strong>Proveedor:</strong> Stripe Payments Europe, Ltd.
              </li>
              <li>
                <strong>Nombres habituales:</strong> <code>__stripe_mid</code>,{" "}
                <code>__stripe_sid</code>.
              </li>
              <li>
                <strong>Finalidad:</strong> Detección y prevención del fraude en
                transacciones financieras de pago.
              </li>
              <li>
                <strong>Duración:</strong> Sesión / 1 año.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>4. Gestión y revocación del consentimiento</h2>
            <p>
              El usuario puede en cualquier momento aceptar, configurar o
              rechazar la instalación de cookies analíticas a través del banner
              o panel de configuración de cookies visible en el sitio web.
            </p>
            <p className="cookie-panel-cta">
              <CookieSettingsButton />
            </p>
            <p>
              Asimismo, es posible permitir, bloquear o eliminar las cookies
              instaladas en el equipo mediante la configuración de las opciones
              del navegador web:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Configuración &gt; Privacidad y
                seguridad &gt; Cookies y otros datos de sitios.
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y
                Seguridad &gt; Cookies y datos del sitio.
              </li>
              <li>
                <strong>Apple Safari:</strong> Preferencias &gt; Privacidad &gt;
                Gestionar datos de sitios web.
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configuración &gt; Permisos del
                sitio &gt; Cookies y datos del sitio.
              </li>
            </ul>
            <p>
              La deshabilitación o rechazo de cookies analíticas no impedirá en
              ningún caso la correcta navegación por la web ni el acceso a los
              contenidos o al proceso de compra.
            </p>
          </div>

          <div className="legal-block">
            <h2>5. Contacto</h2>
            <p>
              Para cualquier duda o consulta sobre esta Política de Cookies, el
              usuario puede dirigirse a{" "}
              <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.
            </p>
          </div>

          <div className="legal-block">
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
                <Link href="/condiciones-de-contratacion">
                  Condiciones generales de contratación
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
