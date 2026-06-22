// Logo Big Lockers (placeholder con el contorno hexagonal del diseño).
// Hereda el color del padre vía `currentColor`, así sirve en blanco (sobre
// la foto) y en verde (sobre la navbar clara).
// 👉 Cuando exportes el SVG real desde Figma (Dev Mode → Export → SVG),
//    reemplazá el contenido por el <svg> o <img src="/images/logo.svg" />.
function Logo({ className = '' }) {
  return (
    <span
      className={`flex items-center justify-center rounded-md border-2 text-center leading-none ${className}`}
      style={{ width: 67, height: 64 }}
    >
      <span className="text-[11px] font-extrabold tracking-tight">
        BIG
        <br />
        LOCKERS
      </span>
    </span>
  )
}

export default Logo
