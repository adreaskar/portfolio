import CodeSnippet from "@/components/code-snippet"
import {
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"
import { PageHeader } from "@/components/page-header"
import Pager from "@/components/pager"
import { code } from "@/config/codeContent"
import Image from "next/image"

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Andreas Karabetian</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
          Cloud & DevOps Engineer at EY
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          Specializing in deploying and managing scalable infrastructure using
          Docker, Kubernetes, and Terraform to streamline cloud operations.
          Experienced in implementing CI/CD pipelines with GitHub Actions and
          Azure DevOps to accelerate development cycles and ensure reliable
          delivery. Focused on leveraging Azure cloud solutions to drive
          innovation and optimize performance for evolving business needs.
        </PageHeaderDescription>
        <Image
          src="/dev.gif"
          unoptimized
          width={2000}
          height={2000}
          alt="Andreas Karabetian"
          className="mt-4 rounded-md"
        />
      </PageHeader>

      <CodeSnippet title="welcome.js" code={code.welcome} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Previous"
        nextTitle="Projects"
      />
    </>
  )
}
export default IntroductionPage
