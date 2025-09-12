import CodeSnippet from "@/components/code-snippet"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import Pager from "@/components/pager"
import { code } from "@/config/codeContent"
import { education, Education } from "./data"
import { GraduationCap } from "lucide-react"

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
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

      <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">
        {education.map((education: Education, index: number) => (
          <li key={index} className="ms-6 not-last:mb-10">
            <span className="bg-primary absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-[#d9fca3] md:ring-8 dark:bg-[#2c4c02] dark:ring-[#141e08]">
              <GraduationCap className="text-primary h-4 w-4" />
            </span>
            <h3 className="mb-1 items-center text-lg font-semibold text-gray-900 dark:text-white">
              {education.title} · {education.school}
              {education.isLatest && (
                <span className="bg-primary ms-3 me-2 rounded-sm px-2.5 py-0.5 text-sm font-medium text-[var(--primary-text)]">
                  Latest
                </span>
              )}
            </h3>
            <time className="mb-2 block text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
              {education.date}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {education.description}
            </p>
          </li>
        ))}
      </ol>

      <CodeSnippet code={code.education} title="education.js" />

      <Pager
        prevHref="/experience"
        nextHref="/publications"
        prevTitle="Experience"
        nextTitle="Publications"
      />
    </>
  )
}
export default EducationPage
