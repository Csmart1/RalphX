function TechStack() {
  return (
    <section className="py-16 flex flex-col items-center justify-center px-6">
      
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl w-full">
        {techStack.map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 p-4 border border-gray-700 rounded-xl hover:border-purple-400 hover:scale-105 transition duration-300"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-12 h-12"
            />
            <p className="text-sm">{tech.name}</p>
          </a>
        ))}
      </div>

    </section>
  );
}

export default TechStack;

const techStack = [
  {
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    link: "https://react.dev",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    link: "https://tailwindcss.com",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "HTML",
    image: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    image: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Git",
    image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    link: "https://git-scm.com",
  },
];