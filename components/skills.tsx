const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border px-4 py-2 rounded-full"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}