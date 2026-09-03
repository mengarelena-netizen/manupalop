import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de privacidad | Manu Palop",
  description:
    "Política de privacidad de manupalop.com: responsable, datos que tratamos, finalidad, derechos y conservación.",
};

export default function PoliticaDePrivacidad() {
  return (
    <>
      <SiteHeader />

      <main className="section" id="politica-privacidad">
        <div className="container legal-container">
          <h1 className="section-title">Política de Privacidad de Manu Palop</h1>
    
          <p className="legal-intro">
            En <strong>Manu Palop</strong>, nos tomamos muy en serio la privacidad de tus datos personales. Esta política te explica cómo recopilamos, usamos y protegemos tu información cuando interactúas con nuestra web, <code>manupalop.com</code>.
          </p>

          <div className="legal-card">
            <h3>Responsable del Tratamiento de tus Datos Personales</h3>
            <ul>
              <li><strong>Razón Social:</strong> Manuel Palop Pérez</li>
              <li><strong>Nombre Comercial:</strong> Manu Palop</li>
              <li><strong>NIF:</strong> 51102118M</li>
              <li><strong>Domicilio:</strong> C/ Pontevedra 46, 28223 Pozuelo de Alarcón (Madrid)</li>
              <li><strong>Correo Electrónico:</strong> <a href="mailto:hola@manupalop.com">hola@manupalop.com</a></li>
              <li><strong>Delegado de Protección de Datos (DPO):</strong> (Si tienes uno, indica su nombre y datos de contacto)</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Cómo Obtenemos tus Datos</h2>
            <p>Recopilamos tus datos de las siguientes formas:</p>
            <ul>
              <li><strong>Formulario de Suscripción a la Newsletter:</strong> Cuando te suscribes a nuestra newsletter, nos proporcionas tu nombre y dirección de correo electrónico.</li>
              <li><strong>Formulario para Agendar Llamada:</strong> Cuando agendas una llamada recopilamos la información que nos proporcionas, como tu nombre, correo electrónico, y otros datos.</li>
              <li><strong>Programa de Formación y Mentorías:</strong> Si te inscribes en nuestro programa, recopilamos los datos necesarios para gestionar tu participación, como tu nombre, correo electrónico, datos de facturación y cualquier otra información que nos proporciones durante el proceso.</li>
              <li><strong>Cookies y tecnologías similares:</strong> Utilizamos cookies y otras tecnologías de seguimiento para mejorar tu experiencia en nuestra web y recopilar información sobre cómo la utilizas. Puedes encontrar más información en nuestra Política de Cookies.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Legitimación para el Tratamiento de tus Datos</h2>
            <p>La base legal para el tratamiento de tus datos es:</p>
            <ul>
              <li><strong>Consentimiento:</strong> Para el envío de nuestra newsletter y comunicaciones comerciales.</li>
              <li><strong>Ejecución de un contrato:</strong> Para la gestión de tu inscripción y participación en el programa de formación y mentorías.</li>
              <li><strong>Interés legítimo:</strong> Para responder a tus consultas y solicitudes a través del formulario de contacto.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Categoría de Datos que Tratamos</h2>
            <p>Los datos que tratamos son:</p>
            <ul>
              <li><strong>Datos identificativos:</strong> Nombre y dirección de correo electrónico.</li>
              <li><strong>Datos de facturación:</strong> En caso de contratar el programa de formación, recopilamos los datos necesarios para emitir la factura.</li>
              <li><strong>Datos de navegación:</strong> Información sobre cómo utilizas nuestra web, recopilada a través de cookies y tecnologías similares.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Finalidad del Tratamiento de tus Datos</h2>
            <p>Tratamos tus datos con las siguientes finalidades:</p>
            <ul>
              <li><strong>Newsletter:</strong> Enviarte nuestra newsletter con contenido relevante sobre pérdida de peso y negocios.</li>
              <li><strong>Email:</strong> Responder a tus consultas y solicitudes.</li>
              <li><strong>Programa de Formación:</strong> Gestionar tu inscripción, facilitarte el acceso a los contenidos y mentorías, y enviarte comunicaciones relacionadas con el programa.</li>
              <li><strong>Mejorar nuestros servicios:</strong> Analizar el uso de nuestra web para mejorar su funcionamiento y contenido.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul>
              <li>Acceder a tus datos personales.</li>
              <li>Rectificar datos inexactos o incompletos.</li>
              <li>Solicitar la supresión de tus datos cuando ya no sean necesarios.</li>
              <li>Oponerte al tratamiento de tus datos.</li>
              <li>Solicitar la limitación del tratamiento en determinadas circunstancias.</li>
              <li>Solicitar la portabilidad de tus datos en un formato estructurado.</li>
            </ul>
            <p>Puedes ejercer tus derechos enviando un correo electrónico a <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.</p>
          </div>

          <div className="legal-block">
            <h2>Plazo de Conservación de tus Datos</h2>
            <p>Conservaremos tus datos:</p>
            <ul>
              <li><strong>Newsletter:</strong> Mientras estés suscrito y no solicites la baja.</li>
              <li><strong>Formulario para Agendar Llamada:</strong> Hasta que la misma tenga lugar.</li>
              <li><strong>Programa de Formación:</strong> Durante el tiempo que dure tu participación en el programa y el tiempo necesario para cumplir con obligaciones legales (por ejemplo, fiscales).</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>¿A qué destinatarios se comunicarán tus datos?</h2>
            <p>De acuerdo con los usos de la información personal, Manuel Palop Pérez puede comunicar tu información personal a destinatarios que le ayudan a promocionar o respaldar sus servicios («proveedores de servicios»).</p>
            <p>Todos los proveedores de servicios celebran un contrato con Manuel Palop Pérez, que protege la información personal y restringe el uso de cualquier información personal conforme a esta política.</p>
            <p>Para prestar servicios estrictamente necesarios para el desarrollo de la actividad, Manuel Palop Pérez, comparte datos con los siguientes prestadores bajo sus correspondientes condiciones de privacidad:</p>
            <p>Proveedores de servicios externos (por ejemplo, servicios de procesamiento de tarjetas de crédito, gestión campañas de marketing, gestión de sitios web, plataforma de email marketing, de facturación, gestoría y otros proveedores de servicios similares) a fin de que estos puedan realizar funciones administrativas y promocionales en nombre de Manuel Palop Pérez.</p>
            <p>Entre ellos:</p>
            <ul>
              <li><strong>Hosting:</strong> Canva</li>
              <li><strong>Plataforma para agendar videollamadas:</strong> Calendly</li>
              <li><strong>Videollamadas:</strong> Google Meet</li>
              <li><strong>Proveedor de Email Marketing:</strong> Active campaign</li>
              <li><strong>Servicios de analítica web:</strong> Google Analytics</li>
              <li><strong>Sistemas de Pago:</strong> Stripe</li>
            </ul>
            <p>Dichos encargos de tratamientos pueden requerir transferencias internacionales de datos, realizándose las mismas siempre a países de la Unión Europea, escudo de privacidad de EEUU o que cuenten con un nivel adecuado de protección de conformidad con la normativa vigente.</p>
          </div>

          <div className="legal-block">
            <h2>Secreto y seguridad de los datos</h2>
            <p>Manuel Palop Pérez se compromete en el uso y tratamiento de los datos incluidos personales de los usuarios, respetando su confidencialidad y a utilizarlos de acuerdo con la finalidad del mismo, así como a dar cumplimiento a su obligación de guardarlos y adaptar todas las medidas para evitar la alteración, pérdida, tratamiento o acceso no autorizado, de conformidad con lo establecido en la normativa vigente de protección de datos.</p>
            <p>Con respecto a la confidencialidad del procesamiento, Manuel Palop Pérez, se asegurará de que cualquier persona que esté autorizada por para procesar los datos del cliente (incluido su personal, colaboradores y prestadores), estará bajo la obligación apropiada de confidencialidad (ya sea un deber contractual o legal), habiendo recibido la formación en protección de datos que marca la legislación vigente en protección de datos.</p>
            <p>Si se presenta algún incidente de seguridad, al darse cuenta Manuel Palop Pérez deberá notificar al Cliente sin demoras indebidas y deberá proporcionar información oportuna relacionada con el Incidente de Seguridad tal como se conozca o cuando el Cliente lo solicite razonablemente.</p>
          </div>

          <div className="legal-block">
            <h2>Notificación de seguridad y declaración de brechas</h2>
            <p>Manuel Palop Pérez, asume medidas razonables y apropiadas para proteger la información personal contra pérdida, uso indebido y acceso no autorizado, divulgación, alteración y destrucción, teniendo en cuenta los riesgos que conlleva el procesamiento y la naturaleza de la información personal, no obstante, si Manuel Palop Pérez, determina que sus datos de servicios han sido malversados (incluso por un empleado de Manuel Palop Pérez) se han visto expuestos por una brecha de seguridad o adquiridos de forma incorrecta por un tercero, Manuel Palop Pérez te informará de inmediato dicha brecha de seguridad, apropiación o adquisición indebida.</p>
          </div>

          <div className="legal-block">
            <h2>Navegación</h2>
            <p>Al navegar por <code>manupalop.com</code> se pueden recoger datos no identificables, que pueden incluir, direcciones IP, ubicación geográfica (aproximadamente), un registro de cómo se utilizan los servicios y sitios, y otros datos que no pueden ser utilizados para identificar al usuario. Entre los datos no identificativos están también los relacionados a sus hábitos de navegación a través de servicios de terceros. Esta web utiliza los siguientes servicios de análisis de terceros:</p>
            <ul>
              <li><strong>Analytic:</strong> se utiliza esta información para analizar tendencias, administrar el sitio, rastrear los movimientos de los usuarios alrededor del sitio y para recopilar información demográfica sobre nuestra base de usuarios en su conjunto. Todo ello con el objetivo de dar un servicio más completo a nuestros usuarios.</li>
            </ul>
          </div>

          <div className="legal-block">
            <h2>Transferencias Internacionales de Datos</h2>
            <p>En caso de que tus datos sean transferidos a países fuera del Espacio Económico Europeo, nos aseguraremos de que se apliquen las garantías adecuadas para proteger tus datos personales.</p>
          </div>

          <div className="legal-block">
            <h2>Cambios en la Política de Privacidad</h2>
            <p>Nos reservamos el derecho a modificar esta política. Te notificaremos cualquier cambio relevante a través de nuestra web o por correo electrónico.</p>
          </div>

          <div className="legal-block">
            <h2>Contacto</h2>
            <p>Si tienes alguna duda sobre esta política de privacidad, puedes contactar con nosotros a través de <a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.</p>
          </div>

          <div className="legal-block">
            <h2>Aceptación</h2>
            <p>Al utilizar nuestra web, aceptas esta política de privacidad.</p>
          </div>

          <div className="legal-updated">
            <p><strong>Última actualización:</strong> 3 de agosto de 2024</p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
