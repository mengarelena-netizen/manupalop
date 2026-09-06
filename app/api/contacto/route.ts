/* Envio del formulario de contacto con Resend.
   La clave y los buzones se configuran en las variables de entorno de Vercel:
     RESEND_API_KEY  obligatoria
     CONTACT_TO      destinatario (por defecto hola@manupalop.com)
     CONTACT_FROM    remitente verificado en Resend (por defecto web@manupalop.com)
   Se usa la API REST en vez del SDK para no anadir dependencias. */

const TO = process.env.CONTACT_TO ?? "hola@manupalop.com";
const FROM = process.env.CONTACT_FROM ?? "Web Manu Palop <web@manupalop.com>";

const LIMITES = { nombre: 120, email: 200, mensaje: 5000 };

function limpiar(valor: unknown, maximo: number) {
  return typeof valor === "string" ? valor.trim().slice(0, maximo) : "";
}

/** Evita que un salto de linea en el nombre inyecte cabeceras en el asunto. */
function unaLinea(valor: string) {
  return valor.replace(/[\r\n]+/g, " ");
}

/** El contenido lo escribe un desconocido: nunca va crudo dentro del HTML. */
function escapar(valor: string) {
  return valor
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* Paleta y tipografia de site.css. El correo va con tablas y estilos en linea
   porque los clientes de correo ignoran las hojas de estilo y el flex. */
const COLOR = {
  acento: "#e69138",
  oscuro: "#171412",
  texto: "#17140f",
  suave: "#5b564f",
  fondo: "#faf6f1",
  borde: "#ece5db",
  claro: "#f5f1ea",
};
const FUENTE =
  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

function plantilla(nombre: string, email: string, mensaje: string) {
  const n = escapar(nombre);
  const e = escapar(email);
  const m = escapar(mensaje).replace(/\r?\n/g, "<br />");

  const fila = (etiqueta: string, valor: string) => `
      <tr>
        <td style="padding:0 0 4px;font:600 12px/1.4 ${FUENTE};letter-spacing:.06em;text-transform:uppercase;color:${COLOR.acento}">${etiqueta}</td>
      </tr>
      <tr>
        <td style="padding:0 0 22px;font:400 16px/1.5 ${FUENTE};color:${COLOR.texto}">${valor}</td>
      </tr>`;

  return `<!doctype html>
<html lang="es">
<body style="margin:0;padding:0;background:${COLOR.fondo}">
  <div style="display:none;max-height:0;overflow:hidden">Nuevo mensaje de ${n} desde el formulario de contacto.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLOR.fondo};padding:32px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid ${COLOR.borde};border-radius:14px;overflow:hidden">
          <tr>
            <td style="background:${COLOR.oscuro};padding:22px 32px;font:800 20px/1.15 ${FUENTE};letter-spacing:.02em;color:${COLOR.claro}">
              MANU <span style="color:${COLOR.acento}">PALOP</span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 32px 8px">
              <p style="margin:0 0 6px;font:800 24px/1.2 ${FUENTE};color:${COLOR.texto}">Nuevo mensaje desde la web</p>
              <p style="margin:0 0 28px;font:400 15px/1.55 ${FUENTE};color:${COLOR.suave}">Alguien ha rellenado el formulario de contacto.</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${fila("Nombre", n)}
                ${fila("Email", `<a href="mailto:${e}" style="color:${COLOR.acento};text-decoration:none">${e}</a>`)}
                ${fila("Mensaje", m)}
              </table>
              <a href="mailto:${e}?subject=Re%3A%20tu%20mensaje%20en%20manupalop.com" style="display:inline-block;margin:0 0 8px;padding:14px 28px;background:${COLOR.acento};border-radius:999px;font:700 15px/1 ${FUENTE};color:#ffffff;text-decoration:none">Responder a ${n}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px 28px">
              <div style="border-top:1px solid ${COLOR.borde};padding-top:18px;font:400 13px/1.5 ${FUENTE};color:${COLOR.suave}">
                Enviado desde el formulario de contacto de manupalop.com
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  let datos: Record<string, unknown>;
  try {
    datos = await request.json();
  } catch {
    return Response.json({ error: "Peticion no valida" }, { status: 400 });
  }

  // Trampa antispam: si viene rellena es un bot. Se responde ok para que no
  // reintente, pero no se envia nada.
  if (limpiar(datos["bot-field"], 50)) {
    return Response.json({ ok: true });
  }

  const nombre = unaLinea(limpiar(datos.nombre, LIMITES.nombre));
  const email = unaLinea(limpiar(datos.email, LIMITES.email));
  const mensaje = limpiar(datos.mensaje, LIMITES.mensaje);

  if (!nombre || !email || !mensaje) {
    return Response.json({ error: "Faltan campos" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return Response.json({ error: "Email no valido" }, { status: 400 });
  }

  const clave = process.env.RESEND_API_KEY;
  if (!clave) {
    // Sin clave el mensaje se perderia en silencio: mejor fallar y que el
    // formulario muestre el correo de contacto.
    console.error("RESEND_API_KEY no esta configurada");
    return Response.json({ error: "Servicio no disponible" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${clave}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Contacto web: ${nombre}`,
      html: plantilla(nombre, email, mensaje),
      // Version en texto para clientes que no muestran HTML.
      text: `Nuevo mensaje desde manupalop.com\n\nNombre: ${nombre}\nEmail: ${email}\n\n${mensaje}\n`,
    }),
  });

  if (!res.ok) {
    console.error("Resend respondio %d: %s", res.status, await res.text());
    return Response.json({ error: "No se ha podido enviar" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
