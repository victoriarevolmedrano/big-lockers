// Logo Big Lockers (placeholder con el contorno hexagonal del diseño).
// 👉 Cuando exportes el SVG real desde Figma (Dev Mode → Export → SVG),
//    reemplazá este componente por el <svg> o un <img src="/images/logo.svg" />.
function Logo({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-white text-white">
        <span className="text-center text-p-xs font-bold leading-none">
          BIG
          <br />
          LOCKERS
        </span>
      </span>
    </div>
  )
}

export default Logo
