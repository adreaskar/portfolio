import { Metadata } from "next"
import { ExternalLink, ScrollText } from "lucide-react"
import { publications, Publication } from "./data"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import Pager from "@/components/pager"
import CodeSnippet from "@/components/code-snippet"
import { code } from "@/config/codeContent"
export const metadata: Metadata = {
  title: "Publications | Portfolio",
  description: "Academic publications and research work",
}

export default function PublicationsPage() {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Publications</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
          A list of research papers that i was involved in
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Throughout my research career, I have been involved in various
          research projects and publications, contributing to the field of
          computer science and technology.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-s border-gray-200 dark:border-gray-700">
        {publications.map((pub: Publication, index: number) => (
          <li key={index} className="ms-6 not-last:mb-10">
            <span className="bg-primary absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-[#d9fca3] md:ring-8 dark:bg-[#2c4c02] dark:ring-[#141e08]">
              <ScrollText className="text-primary h-3.5 w-3.5" />
            </span>
            <h3 className="mb-1 items-center text-lg font-semibold text-gray-900 dark:text-white">
              {pub.title}
              {pub.isLatest && (
                <span className="bg-primary ms-3 me-2 rounded-sm px-2.5 py-0.5 text-sm font-medium text-[var(--primary-text)]">
                  Latest
                </span>
              )}
            </h3>

            <time className="block text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
              Published in {pub.year} under {pub.publisher}
            </time>

            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {pub.abstract}
            </p>

            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-accent bg-accent/40 flex w-fit items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-300"
            >
              Read more
              <ExternalLink className="h-3 w-3" />
            </a>
          </li>
        ))}
      </ol>

      <CodeSnippet code={code.publications} title="publications.js" />

      <Pager
        prevHref="/education"
        nextHref="/presentations"
        prevTitle="Education"
        nextTitle="Presentations"
      />
    </>
  )
}
