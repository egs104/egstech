import Link from "next/link";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

const SkillsSection = () => {
  const skills = [
    "C#",
    ".NET",
    "Azure",
    "React",
    "Typescript",
    "Vite",
    "Webpack",
    "HTML",
    "CSS",
    "Angular",
    "Java",
    "Spring Boot",
    "SQL",
    "NoSQL",
    "Redis",
    "Figma",
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Eric Suarez 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert mb-6">
        Hello! I'm <span className="font-semibold">Eric Suarez</span>, a
        full-stack software engineer. By day, I'm fortunate to{" "}
        <Link href="/work">work</Link> at{" "}
        <span className="not-prose">
          <Badge href="https://microsoft.com">
            <img
              alt="Microsoft logomark"
              src="/microsoft-logo.png"
              className="!mr-1"
              width="14"
              height="14"
            />
            Microsoft
          </Badge>
        </span>{" "}
        , where I get to come up with solutions to interesting business problems
        through code.
      </p>
      <SkillsSection />
      <p className="prose prose-neutral dark:prose-invert mb-6">
        I enjoy <span className="font-semibold">learning new things</span>.
        Whether it's mastering the latest JavaScript framework or exploring
        design principles, I'm always hungry for knowledge and love to share
        cool things I learn with others. I believe that sharing knowledge not
        only enriches our community but also helps us grow collectively.
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        Let's connect! Whether you're a fellow developer, a curious learner, or
        just someone who appreciates good food, I'd love to connect. Feel free
        to explore my portfolio, read my blog posts, and drop me a message.
        Let's build something amazing together! 🚀
      </p>
    </section>
  );
}
