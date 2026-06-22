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
      {/* Foto de fondo. 👉 Colocá la imagen en /public/images/hero-bg.jpg */}
      <img
        src="/images/hero-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      {/* Overlay para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <Navbar />

      {/* Contenido del hero */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-end px-2xl pb-3xl lg:pb-5xl">
        <p className="text-h7 uppercase tracking-wider text-white/90">
          Big Lockers · Una extensión de tus espacios
        </p>

        <h1 className="text-h1 mt-md max-w-[18ch] text-white">
          Alquiler de bauleras en Córdoba
        </h1>

        <p className="text-p-xl mt-md text-white/80">
          Desde $120.000/mes · Acceso 24/7 · Sin garantía
        </p>

        {/* Pills: columna en mobile, fila en web */}
        <ul className="mt-xl flex flex-col gap-sm lg:flex-row lg:flex-wrap">
          {features.map((f) => (
            <li
              key={f.label}
              className="text-p-md inline-flex w-fit items-center gap-xs rounded-full border border-white/20 bg-black/40 px-lg py-sm font-medium text-white backdrop-blur-sm"
            >
              <span aria-hidden="true">{f.icon}</span>
              {f.label}
            </li>
          ))}
        </ul>

        {/* Botones: full-width apilados en mobile, en fila en web */}
        <div className="mt-2xl flex flex-col gap-md lg:flex-row">
          <a
            href="#reservar"
            className="text-h7 inline-flex items-center justify-center gap-sm rounded-full bg-secondary-dark px-2xl py-lg uppercase tracking-wide text-white transition hover:brightness-110 lg:w-auto"
          >
            Reservar por WhatsApp
            <ArrowRight />
          </a>
          <a
            href="#precios"
            className="text-h7 inline-flex items-center justify-center gap-sm rounded-full border border-white/60 px-2xl py-lg uppercase tracking-wide text-white transition hover:bg-white/10 lg:w-auto"
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
