import Navbar from './Navbar'

const features = [
  { icon: '⏱️', label: 'Contratás en 5 minutos' },
  { icon: '🔒', label: 'Predio monitoreado 24/7' },
  { icon: '🚚', label: 'Carga y descarga opcional' },
]

// Flechas de los botones
const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ArrowDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-neutral-darkest">
      {/* Foto de fondo (distinta en mobile y web).
          👉 Colocá los archivos en /public/images/ */}
      <picture className="absolute inset-0 -z-0">
        <source media="(min-width: 1024px)" srcSet="/images/hero-bg-web.jpg" />
        <img
          src="/images/hero-bg-mobile.jpg"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </picture>
      {/* Overlay suave (las fotos ya vienen oscurecidas) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

      <Navbar />

      {/* Contenido del hero */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-end px-2xl pb-3xl lg:pb-5xl">
        <p className="text-h6 uppercase tracking-wider text-white">
          Big Lockers · Una extensión de tus espacios
        </p>

        <h1 className="text-h1 mt-md max-w-[18ch] text-white">
          Alquiler de bauleras en Córdoba
        </h1>

        <p className="text-h5 mt-md text-white/90">
          Desde $120.000/mes · Acceso 24/7 · Sin garantía
        </p>

        {/* Pills: columna en mobile, fila en web. Fondo beige 20% */}
        <ul className="mt-xl flex flex-col gap-sm lg:flex-row lg:flex-wrap">
          {features.map((f) => (
            <li
              key={f.label}
              className="text-h6 inline-flex w-fit items-center gap-xs rounded-full bg-surface/20 px-lg py-sm text-surface-lightest backdrop-blur-sm"
            >
              <span aria-hidden="true">{f.icon}</span>
              {f.label}
            </li>
          ))}
        </ul>

        {/* Botones. WhatsApp: fill #0A8F4D, web 278px. Outline: borde beige/dark.
            Texto: beige/main. Gap interno: sm (12px). Alto: 48px (web) */}
        <div className="mt-2xl flex flex-col gap-md lg:flex-row">
          <a
            href="#reservar"
            className="text-button inline-flex h-14 items-center justify-center gap-sm rounded-full bg-secondary-dark px-2xl text-surface transition hover:brightness-110 lg:h-12 lg:w-[278px]"
          >
            Reservar por WhatsApp
            <ArrowRight />
          </a>
          <a
            href="#precios"
            className="text-button inline-flex h-14 items-center justify-center gap-sm rounded-full border border-surface-dark px-2xl text-surface transition hover:bg-white/10 lg:h-12 lg:w-auto"
          >
            Ver tamaños y precios
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
