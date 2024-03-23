function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Eric Suarez 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert mb-6">
          Hello! I'm <span className="font-semibold">Eric Suarez</span>, a full-stack software engineer. By day, I'm fortunate to work at <span className="not-prose">
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
        </span> , where I get to come up with solutions to interesting business problems through code.
      </p>
      <h2 className="text-xl font-semibold mb-2">What Drives Me</h2>
        <p className="prose prose-neutral dark:prose-invert mb-6">
            I thrive on <span className="font-semibold">learning new things</span>. Whether it's mastering the latest JavaScript framework or exploring design principles, I'm always hungry for knowledge and love to share cool things I learn with others. I believe that sharing knowledge not only enriches our community but also helps us grow collectively.
        </p>
        <h2 className="text-xl font-semibold mb-2">Beyond the Code</h2>
        <ul className="list-disc list-inside prose prose-neutral dark:prose-invert mb-6">
            <li><span className="font-semibold">Sports Enthusiast:</span> From soccer to basketball, golf to MMA—I'm a sports junkie. There's something invigorating about the thrill of competition and the camaraderie of team spirit.</li>
            <li><span className="font-semibold">Gamer at Heart:</span> Video games are my escape. Whether I'm exploring fantastical worlds, solving puzzles, or battling foes, gaming fuels my creativity and keeps my mind sharp.</li>
            <li><span className="font-semibold">Family Time:</span> Nothing beats quality time with loved ones. Whether it's a cozy movie night or a weekend hike, family bonds are my anchor.</li>
            <li><span className="font-semibold">Foodie Adventures:</span> I'm on a perpetual quest for the perfect slice of pizza, the most decadent chocolate cake, and the spiciest street tacos. Food brings people together, and I'm all in!</li>
        </ul>
        <p className="prose prose-neutral dark:prose-invert">
            Let's connect! Whether you're a fellow developer, a curious learner, or just someone who appreciates good food, I'd love to connect. Feel free to explore my portfolio, read my blog posts, and drop me a message. Let's build something amazing together! 🚀
        </p>
    </section>
  );
}
