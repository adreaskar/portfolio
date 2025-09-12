import CodeSnippet from "@/components/code-snippet"
import { PageHeader } from "@/components/page-header"
import {
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import Pager from "@/components/pager"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { code } from "@/config/codeContent"
import { projects, Project } from "./data"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const ProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
          A lot of ideas, but some are still under construction
        </PageHeaderSubHeading>
      </PageHeader>

      <div className="card-container grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projects.map((project: Project, index: number) => (
          <Card key={index} className="w-full gap-2">
            <CardHeader className="flex items-center gap-2">
              {project.icon && (
                <span className="h-7 w-7 items-center justify-center rounded-full ring-2 ring-[var(--border)] sm:hidden xl:flex dark:ring-[var(--border)]">
                  <project.icon className="h-4 w-4" />
                </span>
              )}
              <CardTitle className="leading-6">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardDescription>{project.description}</CardDescription>
              <CardDescription>
                <div className="flex gap-2">
                  {"live" in project && (
                    <Link href={project.live!} target="_blank">
                      <Badge variant="default">
                        Live
                        <ExternalLink className="h-4 w-4" />
                      </Badge>
                    </Link>
                  )}
                  {"github" in project && (
                    <Link href={project.github!} target="_blank">
                      <Badge variant="outline">
                        GitHub
                        <ExternalLink className="h-4 w-4" />
                      </Badge>
                    </Link>
                  )}
                  {!("live" in project) && !("github" in project) && (
                    <Badge variant="outline">Private</Badge>
                  )}
                </div>
              </CardDescription>
            </CardContent>
            <div className="border-border my-2 border-t" />
            <CardFooter className="py-0">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <CodeSnippet code={code.projects} title="projects.js" />

      <Pager
        prevHref="/about"
        nextHref="/skills-tools"
        prevTitle="About"
        nextTitle="Skills & Tools"
      />
    </>
  )
}
export default ProjectsPage
