function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
          Big Lockers
        </h1>
        <p className="mt-3 text-gray-600">
          Proyecto listo. Pásame las specs de Figma (Dev Mode) y empiezo a
          construir las pantallas en web y mobile.
        </p>
        {/* 👇 Indicador visual del breakpoint activo (solo para desarrollo) */}
        <p className="mt-6 text-sm font-mono text-gray-400">
          <span className="lg:hidden">📱 mobile</span>
          <span className="hidden lg:inline">🖥️ web</span>
        </p>
      </div>
    </main>
  )
}

export default App
