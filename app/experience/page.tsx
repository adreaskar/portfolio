import CodeSnippet from "@/components/code-snippet"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import Pager from "@/components/pager"
import { code } from "@/config/codeContent"
import { experience, Experience } from "./data"
import { BriefcaseBusiness } from "lucide-react"

const ExperiencePage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Experience</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
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

      <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">
        {experience.map((experience: Experience, index: number) => (
          <li key={index} className="ms-6 not-last:mb-10">
            <span className="bg-primary absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-[#d9fca3] md:ring-8 dark:bg-[#2c4c02] dark:ring-[#141e08]">
              <BriefcaseBusiness className="text-primary h-3.5 w-3.5" />
            </span>
            <h3 className="mb-1 items-center text-lg font-semibold text-gray-900 dark:text-white">
              {experience.title} · {experience.company}
              {experience.isLatest && (
                <span className="bg-primary ms-3 me-2 rounded-sm px-2.5 py-0.5 text-sm font-medium text-[var(--primary-text)]">
                  Latest
                </span>
              )}
            </h3>
            <time className="mb-2 block text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
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
        nextHref="/certifications"
        prevTitle="Skills & Tools"
        nextTitle="Certifications"
      />
    </>
  )
}
export default ExperiencePage
