import ExperienceTimeline from "app/components/experience-timeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work experience.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      {/* <ExperienceTimeline /> */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products developers , and along the way, teach
          the next generation of developers. Here's a summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Microsoft</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2019 - Present
        </p>
        <p>
          I joined the Cloud & AI organization and worked on critical services
          to enable many of the consulting workflows at Microsoft.
        </p>
        <ul>
          <li>
            From 2019 to 2022, I joined the Project Management team, where I
            worked on both the frontend UI application and backend API services
            of the recently launced Project Management tool in the consulting
            ecosystem. During my time on the team, I was able to tackle some
            good problems such as:
            <ul>
              <li>
                Building a new experience and services for managing financial
                change requests during a project's lifetime where I was able to
                optimize and automate some of the approval process which brought
                down the average time to get all approvals for a change request
                from x to y.
              </li>
              <li>
                Building a new experience for planning and forecasting project
                costs, revenues, and resources where I was able to improve the
                user experience of the front end application (reducing load
                times and optimizing data fetching) and also improve the
                performance of the background services and jobs to calculate the
                financials.
              </li>
              <li>
                When I arrived to the team, the project management API services
                had some downtime whenever a new build was deployed. I was able
                to leverage Azure App Service deployment slots to manage
                production deployments more effectively. Deployed application
                changes to a separate slot (staging slot) before swapping with
                the production slot. Created a manual step for an engineer
                managing the deployment to ensure staging slot instance was
                warmed up and that new changes were validated before triggering
                the swap operation to the production slot. I also added a step
                to the deployment process to roll back to the last production
                slot if something went wrong. With this in place, traffic was
                redirected to the new slot without dropping requests during the
                swap operation, eliminating downtime.
              </li>
              <li>
                During a hackathon, I along with some team members built a
                mobile app experience using React Native for the project
                managers to get a quick overview of their projects and also get
                actionable notifications for any critical issues or changes in
                their projects.
              </li>
            </ul>
          </li>
          <li>
            In 2022, I was promoted to VP of Developer Experience, now also
            leading our product documentation team. My team created a{" "}
            <a href="https://nextjs.org/learn">new free course</a> to teach
            Next.js, which had 17 million page views that year.{" "}
            <a href="https://twitter.com/leeerob/status/1608900031859527682">
              I shipped.
            </a>{" "}
            I partnered with our open-source community, collaborating with
            frameworks like{" "}
            <a href="https://vercel.com/docs/frameworks/nuxt">Nuxt</a> and{" "}
            <a href="https://astro.build/blog/vercel-official-hosting-partner/">
              Astro
            </a>{" "}
            and sponsoring individuals and projects.
          </li>
          <li>
            In 2023, I was promoted to VP of Product, now also leading Product
            Management.
          </li>
        </ul>
        <p>
          Since I joined Vercel in 2020, Next.js active developers have grown
          1000%, now at ~900k. Next.js is now a top 10 software project on
          GitHub. It's used by Walmart, ChatGPT, Starbucks, Okta, Datastax,
          Notion, and <a href="https://nextjs.org/showcase">more</a>.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          American Express
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Senior Software Engineer, 2018 — 2020
        </p>
        <p>
          Hy-Vee, an almost 100-year-old grocery chain in the United States,
          wanted to build a new version of their digital storefront. I joined a
          team of working across web and mobile to rebuild their legacy .NET
          application (~500k MAU) with React and React Native.
        </p>
        <p>
          On the frontend, I led our move from a custom webpack and React
          configuration to Next.js and the latest React patterns. In the
          process, I shared my learnings online, helping educate members of the
          React and Next.js community by creating courses.
        </p>
        <p>
          Throughout my two years, I was able to work on some hard problems:
          decoupling a decade old monolith into microservices, working with a
          federated GraphQL API, learning and occasionally managing a Kubernetes
          cluster, building and implementing a design system, incrementally
          migrating individual components and routes to a new framework and
          infrastructure, and more.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          LifeWallet
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2015 — 2018
        </p>
        <p>Info</p>
      </div>
    </section>
  );
}
