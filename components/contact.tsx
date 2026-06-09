export default function Contact() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText(
      "yesayaroland02@gmail.com"
    );

    alert("Email copied!");
  };

  return (
    <section
      id="contact"
      className="py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <a
          href="https://github.com/yesayaroland02-web"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-lg hover:bg-gray-100"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yesaya-roland-steven-51286b335/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border rounded-lg hover:bg-gray-100"
        >
          💼 LinkedIn
        </a>

        <button
          onClick={copyEmail}
          className="px-6 py-3 border rounded-lg hover:bg-gray-100"
        >
          📋 Copy Email
        </button>
      </div>

      <p className="mt-6 text-gray-600">
        📧 yesayaroland02@gmail.com
      </p>
    </section>
  );
}
