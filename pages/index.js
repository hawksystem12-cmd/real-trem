export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl font-bold text-gray-900">
        Sua música favorita está no
      </h1>

      <h2 className="text-6xl font-bold text-purple-600 mt-4">
        REAL TREM
      </h2>

      <p className="text-gray-600 mt-6 max-w-xl">
        A maneira mais fácil de adicionar música ao seu servidor.
        Busque, teste e copie o link em poucos cliques.
      </p>

      <div className="mt-10 flex w-full max-w-lg">
        <input
          className="w-full p-4 rounded-l-full shadow-lg outline-none"
          placeholder="Buscar música..."
        />
        <button className="bg-purple-600 text-white px-6 rounded-r-full shadow-lg">
          🔍
        </button>
      </div>

      <div className="flex gap-12 mt-16 text-gray-800">
        <div>
          <h3 className="text-2xl font-bold">10K+</h3>
          <p className="text-gray-500">MÚSICAS</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">0.5s</h3>
          <p className="text-gray-500">TEMPO DE BUSCA</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">100%</h3>
          <p className="text-gray-500">GRATUITO</p>
        </div>
      </div>

    </div>
  )
}
