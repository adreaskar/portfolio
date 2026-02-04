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
import { CertificationCard } from "../../components/certification-card"

const CertificationsPage = () => {
  // Sort certifications by date (most recent first)
  const sortedCertifications = [...certifications].sort((a, b) => {
    const dateA = new Date(a.date.replace("Issued ", ""))
    const dateB = new Date(b.date.replace("Issued ", ""))
    return dateB.getTime() - dateA.getTime()
  })

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
        {sortedCertifications.map((cert: Certification, index: number) => (
          <CertificationCard key={index} cert={cert} />
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
