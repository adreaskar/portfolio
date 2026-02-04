import CodeSnippet from "@/components/code-snippet"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import Pager from "@/components/pager"
import { code } from "@/config/codeContent"
import { certifications, Certification } from "./data"
import Link from "next/link"
import { ExternalLink, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const CertificationsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Certifications</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
          Continuously learning and growing
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Professional certifications that validate my expertise and commitment
          to continuous learning in cloud computing and modern technologies.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert: Certification, index: number) => (
          <Link
            key={index}
            href={cert.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className={`border-border bg-card relative flex flex-col items-center gap-4 rounded-lg border px-6 py-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[${cert.color}]/20`}
            >
              {/* Logo */}
              <div className="relative h-26 w-26 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={cert.logo}
                  alt={cert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg leading-tight font-semibold">
                  {cert.title}
                </h3>

                {/* Credential ID Badge */}
                <Badge variant="outline" className="mt-3">
                  {cert.credentialId}
                </Badge>

                <p className="text-muted-foreground text-xs">{cert.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <CodeSnippet code={code.certifications} title="certifications.js" />
      <Pager
        prevHref="/experience"
        nextHref="/education"
        prevTitle="Experience"
        nextTitle="Education"
      />
    </>
  )
}

export default CertificationsPage
