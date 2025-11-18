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
          Cloud Engineer - Full-Stack Developer
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          I am a dedicated Software Engineer specializing in full-stack
          application development and cloud computing.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Though my core interests lie in the design and development of
          full-stack applications, I am currently expanding my skills into Cloud
          Computing and DevOps practices, aiming to enhance my expertise in
          building scalable and efficient applications. I am passionate about
          continuous learning and staying updated with the latest industry
          trends.
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
