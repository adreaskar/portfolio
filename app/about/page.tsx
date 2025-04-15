import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Andreas Karabetian</PageHeaderHeading>
        <PageHeaderSubHeading className="mt-2 text-muted-foreground">
          More than just a title, let’s dive deeper
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          I hold a degree from the Department of Digital Systems at the
          University of Piraeus. Prior to completing my studies, I commenced my
          professional journey at the University of Piraeus Research Center,
          serving as a{" "}
          <a
            href="https://dac.ds.unipi.gr/karabetian"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Research Assistant
          </a>
          .
        </PageHeaderDescription>
        <PageHeaderDescription>
          My journey began with the national research project{" "}
          <a
            href="https://diastema.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            DIASTEMA
          </a>
          , a data-oriented infrastructure for managing and developing big data
          applications. My primary role involved designing and implementing
          visual programming environments and dashboards for interactive data
          visualization and analytics.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Following DIASTEMA, I contributed to the HORIZON EU project{" "}
          <a
            href="https://ai4gov-project.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            AI4Gov
          </a>
          . This project focused on developing a platform for the public sector,
          utilizing AI and data analytics to enhance decision-making processes.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Through these experiences, along with various personal projects, I
          have honed my expertise in full-stack development and cloud
          technologies. With a solid foundation in JavaScript frameworks, I am
          dedicated to building efficient and visually engaging applications.
        </PageHeaderDescription>
        <PageHeaderDescription className="border-t border-dashed border-muted pt-4 mb-2">
          Though my core interests lie in the design and development of
          full-stack applications, I am currently expanding my skills into Cloud
          Computing and DevOps practices, aiming to enhance my expertise in
          building scalable and efficient applications and automating deployment
          processes. I am passionate about continuous learning and staying
          updated with the latest industry trends.
        </PageHeaderDescription>
      </PageHeader>

      <CodeSnippet title="aboutMe.js" code={code.aboutMe} />

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
