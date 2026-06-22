import Logo from './Logo'

// Toggle de marcas (solo web). El item activo va en pill blanca.
const brands = ['Big Lockers', 'Francia Containers', 'Francia S.A.']

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      {/* ─── MOBILE: logo + hamburguesa sobre la foto ─── */}
      <nav className="flex h-[90px] items-center justify-between px-2xl lg:hidden">
        <a href="#" aria-label="Big Lockers — inicio" className="text-white">
          <Logo />
        </a>
        <button
          type="button"
          aria-label="Abrir menú"
          className="flex h-11 w-11 items-center justify-center text-white"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M5 10h22M5 16h22M5 22h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* ─── WEB: barra flotante clara (pill) ─── */}
      <div className="mx-auto hidden max-w-[1200px] px-2xl pt-xl lg:block">
        <nav className="flex items-center justify-between rounded-full bg-surface-lightest/85 px-xs py-xs pl-lg shadow-md backdrop-blur">
          <div className="flex items-center gap-lg">
            <a href="#" aria-label="Big Lockers — inicio" className="text-primary">
              <Logo className="!h-10 !w-10 border-primary" />
            </a>

            {/* Toggle de marcas */}
            <div className="flex items-center gap-2xs rounded-full p-2xs">
              {brands.map((brand, i) => (
                <button
                  key={brand}
                  type="button"
                  className={`text-h7 rounded-full px-lg py-sm transition ${
                    i === 0
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-neutral-dark hover:text-primary'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-xl pr-xs">
            <a href="#bauleras" className="text-h7 uppercase tracking-wide text-primary hover:text-primary-dark">
              Bauleras
            </a>
            <a href="#coworking" className="text-h7 uppercase tracking-wide text-primary hover:text-primary-dark">
              Coworking
            </a>
            <a
              href="#reservar"
              className="text-h7 rounded-full bg-primary px-xl py-md uppercase tracking-wide text-white transition hover:bg-primary-dark"
            >
              Reservar ahora
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
