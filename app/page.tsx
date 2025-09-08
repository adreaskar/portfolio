import CodeSnippet from "@/components/code-snippet";
import {
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";
import Image from "next/image";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Andreas Karabetian</PageHeaderHeading>
        <PageHeaderSubHeading className="text-muted-foreground mt-2">
          Full-Stack Software Engineer
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          I am a dedicated Software Engineer specializing in full-stack
          application development. I enjoy crafting responsive web solutions
          using modern technologies like Next.js, React, and Tailwind CSS.
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
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
