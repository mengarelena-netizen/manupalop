document.addEventListener('DOMContentLoaded', () => {

  // Año dinámico en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Vídeo testimonio ----------
  // La miniatura es sólo una fachada: hasta que no se pulsa no se carga nada de
  // YouTube. Al reproducir se usa controls=0 y controles propios, para que no
  // aparezca el marco de YouTube (título, barra inferior, sello "Shorts").

  let ytApi = null;
  function loadYouTubeApi() {
    if (ytApi) return ytApi;
    ytApi = new Promise((resolve, reject) => {
      if (window.YT && window.YT.Player) return resolve(window.YT);
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previous === 'function') previous();
        resolve(window.YT);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return ytApi;
  }

  document.querySelectorAll('.video-wrap[data-video-id]').forEach(setUpVideo);

  function setUpVideo(facade) {
    facade.addEventListener('click', () => play(facade), { once: true });
  }

  function play(facade) {
    facade.classList.add('is-loading');

    const stage = document.createElement('div');
    stage.className = 'video-wrap is-playing';

    const mount = document.createElement('div');
    stage.appendChild(mount);

    // Capa propia: un solo botón de pausa/reproducción encima del vídeo, que
    // además impide que el usuario llegue al reproductor de YouTube.
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'video-toggle';
    toggle.setAttribute('aria-label', 'Pausar vídeo');
    toggle.innerHTML =
      '<span class="video-toggle-icon" aria-hidden="true">' +
      '<svg class="icon-pause" viewBox="0 0 24 24" focusable="false"><path d="M7 5h3.4v14H7zm6.6 0H17v14h-3.4z"/></svg>' +
      '<svg class="icon-play" viewBox="0 0 24 24" focusable="false"><path d="M8 5.5v13l11-6.5z"/></svg>' +
      '</span>';
    stage.appendChild(toggle);

    loadYouTubeApi().then(YT => {
      facade.replaceWith(stage);

      const player = new YT.Player(mount, {
        videoId: facade.dataset.videoId,
        host: 'https://www.youtube-nocookie.com',
        // Sin esto la API crea el iframe a 640x360 y el vídeo vertical queda
        // descuadrado dentro del marco.
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: 1,
          controls: 0,        // sin marco de YouTube durante la reproducción
          rel: 0,
          fs: 0,
          disablekb: 1,
          playsinline: 1,
          modestbranding: 1,
          iv_load_policy: 3
        },
        events: {
          onReady: e => {
            e.target.playVideo();
            stage.classList.add('is-ready');
            // El reproductor mide su tamaño al crearse; le pedimos que lo
            // recalcule ya montado en el marco vertical.
            window.dispatchEvent(new Event('resize'));
          },
          onStateChange: e => {
            const paused = e.data === YT.PlayerState.PAUSED;
            stage.classList.toggle('is-paused', paused);
            toggle.setAttribute('aria-label', paused ? 'Reproducir vídeo' : 'Pausar vídeo');
            // Al terminar volvemos a la miniatura, en vez de dejar la pantalla
            // final de YouTube con sus vídeos sugeridos.
            if (e.data === YT.PlayerState.ENDED) restore(stage, facade);
          }
        }
      });

      toggle.addEventListener('click', () => {
        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) player.pauseVideo();
        else player.playVideo();
      });
    }).catch(() => {
      // Si la API de YouTube no carga, al menos que el vídeo se pueda ver.
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + facade.dataset.videoId +
        '?autoplay=1&rel=0&playsinline=1';
      iframe.title = 'Vídeo testimonio';
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      stage.replaceChildren(iframe);
      facade.replaceWith(stage);
    });
  }

  function restore(stage, facade) {
    facade.classList.remove('is-loading');
    stage.replaceWith(facade);
    setUpVideo(facade);
  }

  // Lightbox para las fotos de los carruseles
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.carousel-track img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
    });
  });

  function closeLightbox() { lightbox.classList.remove('open'); }
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Carruseles "140 kg" / "80 kg": pasan las fotos automáticamente
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const imgs = carousel.querySelectorAll('.carousel-track img');
    if (imgs.length < 2) return;

    let index = [...imgs].findIndex(img => img.classList.contains('active'));
    if (index === -1) index = 0;

    const intervalMs = parseInt(carousel.dataset.interval, 10) || 3000;
    let timer = setInterval(next, intervalMs);

    function next() {
      imgs[index].classList.remove('active');
      index = (index + 1) % imgs.length;
      imgs[index].classList.add('active');
    }

    // Pausa al pasar el ratón, para poder mirar una foto con calma
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => { timer = setInterval(next, intervalMs); });
  });

  // Formulario de contacto: lo recoge Netlify Forms y lo reenvia a la direccion
  // configurada en el panel de Netlify (Forms > notificaciones).
  const contactForm = document.getElementById('contactForm');
  const contactNote = document.getElementById('contactNote');
  if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.textContent : '';

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      contactNote.className = 'form-note';
      contactNote.textContent = 'Enviando…';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando…';
      }

      // Netlify acepta el POST en cualquier ruta del sitio mientras el cuerpo
      // lleve form-name. Ojo: solo funciona en el sitio desplegado en Netlify.
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(contactForm)).toString()
      })
        .then(res => {
          if (!res.ok) throw new Error('Error al enviar');
          contactNote.className = 'form-note is-ok';
          contactNote.textContent = 'Mensaje enviado. Te responderé lo antes posible.';
          contactForm.reset();
        })
        .catch(() => {
          // Sin esto el usuario creería que el mensaje ha salido cuando no ha salido.
          contactNote.className = 'form-note is-error';
          contactNote.innerHTML = 'No se ha podido enviar. Escríbeme a ' +
            '<a href="mailto:hola@manupalop.com">hola@manupalop.com</a>.';
        })
        .then(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitLabel;
          }
        });
    });
  }

});
