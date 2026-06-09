const projects = [
  {
    title: "AI Dev Mentor",
    link: "https://ai-dev-mentor-5dy5.vercel.app/",
  },
  {
    title: "Coffee Shop",
    link: "https://coffee-shop-zeta-beige.vercel.app/",
  },
  {
    title: "Company Profile",
    link: "https://company-profile-chi-green.vercel.app/",
  },
  {
    title: "To Do App",
    link: "https://to-do-app-gqqm.vercel.app/login",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border rounded-xl p-6"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <a
              href={project.link}
              target="_blank"
              className="text-blue-500"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}