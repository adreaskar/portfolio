import CodeSnippet from "@/components/code-snippet";
import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import { code } from "@/config/codeContent";
import { mySkills } from "@/constants";

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderSubHeading className="mt-2 text-muted-foreground">
          Stuff i learned by coding all night
        </PageHeaderSubHeading>
        <PageHeaderDescription>
          As a full-stack Software Engineer, I specialize in building web
          applications using modern technologies such as Next.js, React, and
          Tailwind CSS. I'm also well-versed in backend development with Node.js
          and Express, and I have experience with databases like MongoDB and
          MySQL. My skill set extends to cloud technologies like Docker,
          enabling me to deploy and manage applications efficiently.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}
      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: "mr-2 size-4",
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <CodeSnippet title="skills.js" code={code.skillsTools} />

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
