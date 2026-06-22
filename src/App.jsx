const textStyles = [
  'text-h1',
  'text-h2',
  'text-h3',
  'text-h4',
  'text-h5',
  'text-h6',
  'text-h7',
  'text-tag-label',
  'text-p-xl',
  'text-p-lg',
  'text-p-md',
  'text-p-sm',
  'text-p-xs',
]

const swatches = [
  { name: 'primary', cls: 'bg-primary' },
  { name: 'primary-dark', cls: 'bg-primary-dark' },
  { name: 'secondary', cls: 'bg-secondary' },
  { name: 'secondary-dark', cls: 'bg-secondary-dark' },
  { name: 'surface', cls: 'bg-surface' },
  { name: 'surface-dark', cls: 'bg-surface-dark' },
  { name: 'neutral', cls: 'bg-neutral' },
  { name: 'neutral-darkest', cls: 'bg-neutral-darkest' },
  { name: 'francia-cont', cls: 'bg-francia-cont' },
  { name: 'francia-sa', cls: 'bg-francia-sa' },
]

function App() {
  return (
    <main className="min-h-screen bg-surface-lightest px-xl py-2xl">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-h1 text-primary">Big Lockers — Design Tokens</h1>
        <p className="text-p-lg mt-md text-neutral-darker">
          Vista de verificación. Si ves los colores y las tipografías
          correctas, los tokens de Figma están bien cargados.
        </p>

        <section className="mt-2xl">
          <h2 className="text-h4 text-primary mb-md">Colores semánticos</h2>
          <div className="grid grid-cols-2 gap-md sm:grid-cols-3 lg:grid-cols-5">
            {swatches.map((s) => (
              <div key={s.name}>
                <div className={`${s.cls} h-16 w-full rounded-lg border border-neutral-lighter`} />
                <p className="text-p-sm mt-2xs text-neutral-dark">{s.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-2xl">
          <h2 className="text-h4 text-primary mb-md">Tipografías</h2>
          <div className="space-y-sm">
            {textStyles.map((t) => (
              <p key={t} className={`${t} text-neutral-darkest`}>
                {t} — Big Lockers 1234567890
              </p>
            ))}
          </div>
        </section>

        <p className="text-p-sm mt-2xl font-mono text-neutral-light">
          <span className="lg:hidden">📱 mobile</span>
          <span className="hidden lg:inline">🖥️ web</span>
        </p>
      </div>
    </main>
  )
}

export default App
