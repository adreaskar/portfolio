import { Metadata } from "next"
import { ExternalLink, MapPin, UsersRound, CalendarDays } from "lucide-react"
import { presentations, Presentation } from "./data"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Pager from "@/components/pager"
import CodeSnippet from "@/components/code-snippet"
import { code } from "@/config/codeContent"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
export const metadata: Metadata = {
  title: "Presentations | Portfolio",
  description: "Presentations",
}

export default function TalksPage() {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Presentations</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
          Where I talk about things that probably only 3 people understand
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          I love public speaking and sharing my knowledge with others. i am
          grateful for the opportunities given to me by my university and the
          people i have met. Below you will find some of the most important
          presentations that i have given.
        </PageHeaderDescription>
      </PageHeader>

      <div className="card-container grid grid-cols-1 gap-5 lg:grid-cols-2">
        {presentations.map((presentation: Presentation, index: number) => (
          <Card key={index} className="w-full gap-2">
            <CardHeader className="flex items-center gap-2">
              <CardTitle className="leading-6">{presentation.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              <section className="xl:w-2/3">
                <CardDescription>
                  <span className="my-2 flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {presentation.date}
                  </span>

                  <span className="my-2 flex items-center gap-2">
                    <UsersRound className="h-4 w-4" />
                    {presentation.event}
                  </span>

                  <span className="my-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {presentation.location}
                  </span>
                </CardDescription>
                <Link
                  href={`/presentations/${presentation.id}`}
                  rel="noopener noreferrer"
                  className="hover:bg-accent bg-accent/40 mt-7 flex w-fit items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-300"
                >
                  View presentation details
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </section>
              <section className="hidden xl:block xl:w-1/3">
                <Image
                  src={presentation.images[0]}
                  alt={presentation.title}
                  width={170}
                  height={170}
                  className="rounded-md"
                />
              </section>
            </CardContent>
            <div className="border-border my-2 border-t" />
            <CardFooter className="py-0">
              <div className="flex flex-wrap gap-2">
                {presentation.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <CodeSnippet code={code.presentations} title="presentations.js" />

      <Pager
        prevHref="/publications"
        nextHref="/presentations"
        prevTitle="Publications"
        nextTitle="Presentations"
      />
    </>
  )
}
