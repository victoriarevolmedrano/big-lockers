import Logo from './Logo'

function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-xl py-lg lg:px-3xl">
        <a href="#" aria-label="Big Lockers — inicio">
          <Logo />
        </a>

        {/* Botón menú (mobile). En desktop probablemente sea un menú de links;
            lo ajusto cuando me pases la captura web. */}
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
    </header>
  )
}

export default Navbar
