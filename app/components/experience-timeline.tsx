"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface Experience {
  title: string;
  location: string;
  date: string;
  icon: React.ReactNode;
  description: string;
}

const experiences: Experience[] = [
  {
    title: "Creative Director",
    location: "Miami, FL",
    date: "2011 - present",
    icon: (
      <img
        alt="Microsoft logomark"
        src="/microsoft-logo.png"
        height={30}
        width={30}
      />
    ),
    description:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    title: "Art Director",
    location: "San Francisco, CA",
    date: "2010 - 2011",
    icon: (
      <img
        alt="Microsoft logomark"
        src="/amex-logo.png"
        height={30}
        width={30}
      />
    ),
    description:
      "Creative Direction, User Experience, Visual Design, SEO, Online Marketing",
  },
];

export default function ExperienceTimeline() {
  return (
    <section>
      <VerticalTimeline>
        {experiences.map((experience, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                textClassName="border-neutral-700 bg-neutral-800 text-neutral-100 no-underline dark:border-neutral-200 dark:bg-neutral-50 dark:text-neutral-900"
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={experience.date}
                dateClassName="text-neutral-500 dark:text-neutral-400"
                icon={experience.icon}
                iconClassName="flex items-center justify-center border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              >
                <h3>Creative Director</h3>
                <h4>Miami, FL</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
