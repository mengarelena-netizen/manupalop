import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import MotionProvider from "@/components/motion/MotionProvider";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://manupalop.com"),
};

// Va en linea y sin React para que corra al parsear, no al hidratar: es lo
// que hace que todas las secciones entren con el mismo ritmo.
//
// Cada [data-reveal] se observa por separado y se enciende cuando le toca a
// el, no cuando entra su seccion. El escalonado se reparte entre los que
// asoman a la vez, en orden del documento, y se corta a los ${1 + REVEAL_MAX_STEPS}
// para que una bajada rapida no encadene medio segundo tras otro.
//
// El orden es el del DOM y no el geometrico: en una rejilla con items-center
// la columna alta empieza mas arriba que la de al lado, y ordenar por
// coordenada hacia que la foto de la derecha entrase antes que su texto.
//
// El margen inferior del observador adelanta el arranque: el elemento empieza
// a aparecer antes de asomar, asi no se ve el hueco vacio mientras bajas.
//
// data-reveal-first entra en la secuencia de carga junto al hero, sin esperar
// a cruzar el umbral: es para lo que va pegado al hero y debe sentirse parte
// de la misma entrada.
//
// El MutationObserver del final no es opcional: al navegar entre paginas Next
// cambia el DOM sin recargar, y sin el lo nuevo se quedaria oculto por el CSS
// para siempre (pagina en blanco hasta refrescar).
const REVEAL_STEP_MS = 90;
const REVEAL_MAX_STEPS = 5;
const REVEAL_SCRIPT = `(function(){
var d=document,r=d.documentElement;
if(!('IntersectionObserver' in window))return;
r.className+=' reveal-ready';
var seen=new WeakSet(),queued=false;
function show(list){
list.sort(function(a,b){
var p=a.target.compareDocumentPosition(b.target);
return (p&4)?-1:(p&2)?1:0;
});
for(var k=0;k<list.length;k++){
var el=list[k].target;
el.style.transitionDelay=(Math.min(k,${REVEAL_MAX_STEPS})*${REVEAL_STEP_MS})+'ms';
el.classList.add('reveal-in');
}}
var io=new IntersectionObserver(function(es){
var hit=[];
for(var i=0;i<es.length;i++){
if(!es[i].isIntersecting)continue;
io.unobserve(es[i].target);hit.push(es[i]);
}
show(hit);
},{threshold:0,rootMargin:'0px 0px 22% 0px'});
function scan(){
queued=false;
var n=d.querySelectorAll('[data-reveal]'),now=[];
for(var i=0;i<n.length;i++){
if(seen.has(n[i]))continue;
seen.add(n[i]);
if(n[i].hasAttribute('data-reveal-first')){
now.push({target:n[i],boundingClientRect:n[i].getBoundingClientRect()});
}else io.observe(n[i]);
}
if(now.length)show(now);
}
function queue(){if(queued)return;queued=true;requestAnimationFrame(scan);}
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',scan);else scan();
new MutationObserver(queue).observe(r,{childList:true,subtree:true});
})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className="[scroll-padding-top:calc(var(--header-h)_+_12px)]"
    >
      <head>
        {/* Misma fuente y mismo orden de carga que el sitio original. Se usa
            el <link> de Google Fonts en vez de next/font a proposito: next/font
            sirve la fuente desde otro origen y con otro nombre de familia, y eso
            cambiaria el renderizado respecto al sitio actual.
            eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />
      </head>
      <body className="m-0 bg-surface font-sans leading-[1.55] text-ink antialiased">
        <MotionProvider>
          {children}
          <CookieConsent />
        </MotionProvider>
      </body>
    </html>
  );
}
