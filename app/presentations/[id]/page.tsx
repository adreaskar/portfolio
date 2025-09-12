import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import { presentations, Presentation } from "../data"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, UsersRound, CalendarDays } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const PresentationPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const presentation = presentations.find(
    (presentation) => presentation.id === id
  )
  return (
    <>
      <PageHeader className="mb-10">
        <Link
          href="/presentations"
          className="hover:bg-accent/60 bg-accent/20 mb-3 flex w-fit items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to presentations
        </Link>
        <PageHeaderHeading>{presentation?.title}</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
          <span className="my-3 flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {presentation?.date}
          </span>
          <span className="my-3 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {presentation?.location}
          </span>
          <span className="my-3 flex items-center gap-2">
            <UsersRound className="h-4 w-4" />
            {presentation?.event}
          </span>
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          <span className="whitespace-pre-line">
            {presentation?.description}
          </span>
        </PageHeaderDescription>
      </PageHeader>

      {/* Gallery */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {presentation?.images.map((image) => (
          <Image
            key={image}
            src={image}
            alt={presentation?.title}
            width={400}
            height={400}
          />
        ))}
      </div>

      <div className="border-border my-4 border-t" />
      <div className="flex flex-wrap gap-1.5">
        {presentation?.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </>
  )
}
export default PresentationPage
