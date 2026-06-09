export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://github.com/yesayaroland02-web"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-lg"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yesaya-roland-steven-51286b335/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-lg"
        >
          💼 LinkedIn
        </a>
      </div>

      <div className="mt-6">
        <p>Email:</p>
        <p className="font-semibold">
          yesayaroland02@gmail.com
        </p>
      </div>
    </section>
  );
}
