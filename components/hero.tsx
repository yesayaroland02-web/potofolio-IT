export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold">
        Yesaya Roland Steven
      </h1>

      <p className="text-2xl mt-4 text-gray-600">
        Fresh Graduate Sistem Informasi
      </p>

      <p className="mt-2 text-lg">
        Fullstack Developer
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Lihat Project
        </a>
      </div>
    </section>
  );
}