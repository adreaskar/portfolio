import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderSubHeading className="mt-2 text-muted-foreground">
          Doing what I love, one project at a time
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Throughout my journey as a developer, I have had the opportunity to
          work in a variety of projects that have shaped my skills, while also
          mastering the fine art of debugging at 2 AM. In each project I have
          worked on, I have strived to create solutions that are not only
          functional but also user-friendly and visually appealing.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        {siteConfig.experiences.map((experience, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-[#d9fca3] dark:ring-[#141e08] dark:bg-[#2c4c02]">
              <svg
                className="w-2.5 h-2.5 text-[var(--primary-text)] dark:text-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {experience.title} · {experience.company}
              {experience.isLatest && (
                <span className="bg-primary text-[var(--primary-text)] text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.date} | {experience.location}
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              {experience.description}
            </p>
          </li>
        ))}
      </ol>

      <CodeSnippet code={code.experience} title="experience.js" />

      <Pager
        prevHref="/skills-tools"
        nextHref="/education"
        prevTitle="Skills & Tools"
        nextTitle="Education"
      />
    </>
  );
};
export default ExperiencePage;
