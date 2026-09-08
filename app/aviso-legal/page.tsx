import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Aviso legal | Manu Palop",
  description:
    "Aviso legal de manupalop.com: datos identificativos del titular, condiciones de uso, propiedad intelectual y exencion de responsabilidad.",
};

export default function AvisoLegal() {
  return (
    <>
      <SiteHeader />

      <main className="section" id="aviso-legal">
        <div className="container legal-container">
          <h1 className="section-title">Aviso legal</h1>

          <p className="legal-intro">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE), se exponen a continuación los datos
            identificativos del titular del sitio web:
          </p>

          <div className="legal-card">
            <h3>Datos identificativos del titular</h3>
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
                <strong>Correo electrónico de contacto:</strong>{" "}
                <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>1. Objeto</h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del
              sitio web <code>manupalop.com</code>, así como las
              responsabilidades derivadas de la utilización de sus contenidos
              (textos, gráficos, dibujos, diseños, código, software,
              fotografías, música, vídeos, sonidos, bases de datos, imágenes o
              informaciones).
            </p>
            <p>
              El acceso y uso de este sitio web atribuye la condición de
              Usuario, lo que implica la aceptación plena y sin reservas de
              todas y cada una de las disposiciones incluidas en este documento
              desde el momento en que se accede al portal.
            </p>
          </div>

          <div className="legal-block">
            <h2>2. Condiciones de uso y obligaciones del usuario</h2>
            <p>
              El Usuario se compromete a hacer un uso diligente, correcto y
              lícito del sitio web y de los servicios ofrecidos, con total
              sujeción a la Ley, a las buenas costumbres y al presente Aviso
              Legal.
            </p>
            <p>Queda expresamente prohibido:</p>
            <ul>
              <li>
                Realizar actividades ilícitas, ilegales o contrarias a la buena
                fe y al orden público.
              </li>
              <li>
                Difundir contenidos o propaganda de carácter racista, xenófobo,
                pornográfico-ilegal, de apología del terrorismo o atentatorio
                contra los derechos humanos.
              </li>
              <li>
                Provocar daños en los sistemas físicos y lógicos de Manu Palop,
                de sus proveedores o de terceras personas (introducción de virus
                informáticos, malware o cualquier otro sistema susceptible de
                causar daños).
              </li>
              <li>
                Intentar acceder, utilizar y/o manipular las cuentas de correo
                electrónico o áreas privadas de otros usuarios.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los elementos que forman el sitio web (diseños, logotipos,
              textos, publicaciones del diario, fotografías, vídeos y código
              fuente) son titularidad de Manuel Palop Pérez o de terceros que
              han autorizado su uso, encontrándose protegidos por la normativa
              española e internacional sobre propiedad intelectual e industrial.
            </p>
            <p>
              Queda terminantemente prohibida la reproducción, distribución,
              comunicación pública, transformación o cualquier otra forma de
              explotación de todo o parte de los contenidos de esta web con
              fines comerciales o de lucro sin la autorización previa, expresa y
              por escrito de Manuel Palop Pérez.
            </p>
          </div>

          <div className="legal-block">
            <h2>4. Exención de responsabilidad</h2>
            <ul>
              <li>
                <strong>Continuidad del servicio:</strong> Manu Palop no
                garantiza la ausencia de interrupciones o errores en el acceso a
                la web o a sus contenidos, aunque adoptará todas las medidas
                razonables para evitarlos o subsanarlos con la mayor celeridad
                posible.
              </li>
              <li>
                <strong>Naturaleza de los contenidos:</strong> Los textos,
                reflexiones, materiales formativos, publicaciones del blog o
                contenidos del Club VIP tienen un carácter divulgativo,
                formativo y de opinión personal.{" "}
                <strong>
                  No constituyen en ningún caso asesoramiento financiero, legal,
                  fiscal ni sanitario/médico personalizado.
                </strong>{" "}
                El Usuario es el único y exclusivo responsable de las decisiones
                que tome a partir de la información o ideas expuestas en este
                sitio web.
              </li>
              <li>
                <strong>Enlaces a terceros:</strong> En el sitio web pueden
                existir enlaces o hipervínculos hacia plataformas de terceros
                (como Substack, Stripe, redes sociales, etc.). Manu Palop no
                ejerce ningún tipo de control sobre dichos sitios y contenidos
                ajenos, declinando cualquier responsabilidad por daños o
                perjuicios que pudieran derivarse de su acceso o uso.
              </li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>5. Enlaces hacia manupalop.com</h2>
            <p>
              Se autoriza el establecimiento de hipervínculos hacia este sitio
              web siempre que se dirijan a la página principal o a artículos
              específicos, de forma limpia y transparente. Quedan expresamente
              prohibidas las prácticas de <em>framing</em> (reproducir la web
              dentro de otro marco ajeno) o cualquier manifestación falsa,
              inexacta o lesiva sobre Manu Palop o sus servicios.
            </p>
          </div>

          <div className="legal-block">
            <h2>6. Legislación aplicable y jurisdicción</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones
              relacionadas con el presente sitio web o con las actividades en él
              desarrolladas, será de aplicación la legislación española vigente.
            </p>
            <p>
              Las partes se someten, para la resolución de los conflictos y con
              renuncia a cualquier otro fuero que pudiera corresponderles, a los
              Juzgados y Tribunales del domicilio del titular o, en su caso, a
              los legalmente determinados por la normativa de protección de los
              consumidores y usuarios.
            </p>
          </div>

          <div className="legal-block">
            <h2>Documentos relacionados</h2>
            <ul>
              <li>
                <Link href="/politica-de-privacidad">
                  Política de privacidad
                </Link>
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
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
