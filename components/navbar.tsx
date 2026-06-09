export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">
          Yesaya Roland Steven
        </h1>

        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}