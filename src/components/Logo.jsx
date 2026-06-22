// Logo Big Lockers — hexágono recreado en SVG (aprox. al de Figma).
// Hereda el color del padre vía `currentColor`. El tamaño lo controla
// el `className` (ancho/alto).
// 👉 Si subís el logo.svg oficial, reemplazá este SVG por
//    <img src="/images/logo.svg" className={className} alt="Big Lockers" />.
function Logo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 96"
      fill="none"
      className={className}
      role="img"
      aria-label="Big Lockers"
    >
      <polygon
        points="50,3 94,26 94,70 50,93 6,70 6,26"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <text
        x="50"
        y="56"
        textAnchor="middle"
        fill="currentColor"
        className="font-zuume"
        style={{ fontSize: 28, fontWeight: 700, letterSpacing: '0.02em' }}
      >
        BIG
      </text>
      <text
        x="50"
        y="76"
        textAnchor="middle"
        fill="currentColor"
        className="font-zuume"
        style={{ fontSize: 15, fontWeight: 700, letterSpacing: '0.04em' }}
      >
        LOCKERS
      </text>
    </svg>
  )
}

export default Logo
