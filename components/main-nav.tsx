"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "lucide-react";
import { Icons } from "./icons";
import { docsConfig } from "@/config/docs";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="hidden mr-4 md:flex">
      <Link href="/" className="flex items-center gap-2 mr-4 lg:mr-6">
        <Icons.logo />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target="_blank"
            className="transition-colors hover:text-foreground/80"
          >
            {item.title}
          </Link>
        ))}
        <Link
          href={siteConfig.links.resume}
          target="_blank"
          className="flex items-center gap-1 transition-colors hover:text-foreground/80"
        >
          Resume <ExternalLink className="size-3" />
        </Link>
      </nav>
    </div>
  );
}
