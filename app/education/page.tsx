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

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderSubHeading className="mt-2 text-muted-foreground">
          Yes, I attended University classes
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Education has shaped my understanding of technology and its impact on
          society. I have pursued a degree in Computer Science, where I gained a
          solid foundation in programming, algorithms, and software development.
          My coursework has included subjects such as data structures, web
          development, and database management, which have equipped me with the
          skills necessary to tackle complex problems and develop innovative
          solutions.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        {siteConfig.education.map((education, index) => (
          <li key={index} className="not-last:mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-4 md:ring-8 ring-[#d9fca3] dark:ring-[#141e08] dark:bg-[#2c4c02]">
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
            <h3 className="items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {education.title} · {education.company}
              {education.isLatest && (
                <span className="bg-primary text-[var(--primary-text)] text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">
                  Latest
                </span>
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {education.date}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {education.description}
            </p>
          </li>
        ))}
      </ol>

      <CodeSnippet code={code.educationJourney} title="educationJourney.js" />

      <Pager
        prevHref="/experience"
        nextHref="/"
        prevTitle="Experience"
        nextTitle="Home"
      />
    </>
  );
};
export default EducationPage;
