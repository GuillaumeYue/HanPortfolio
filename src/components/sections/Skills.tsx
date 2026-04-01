function Skills() {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'SwiftUI',
    'C#',
    'ASP.NET MVC',
    'Android Studio',
    'Python',
    'PHP',
    'Firebase',
    'SQL Server',
    'MongoDB',
    'Git',
    'GitHub',
  ]

  return (
    <section id="skills" className="bg-gray-50 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border px-4 py-2 text-sm text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills