"use client";

import { ChevronRight } from "lucide-react";

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Pager = ({
  prevHref,
  nextHref,
  prevTitle,
  nextTitle,
}: {
  prevHref: string;
  nextHref: string;
  prevTitle: string;
  nextTitle: string;
}) => {
  const pathname = usePathname();
  return (
    <div className="mt-8 flex w-full flex-row items-center justify-between">
      {prevHref !== pathname && (
        <Button variant="ghost" asChild>
          <Link href={prevHref}>
            <ChevronLeft />
            {prevTitle}
          </Link>
        </Button>
      )}

      <Button variant="ghost" className="ml-auto" asChild>
        <Link href={nextHref}>
          {nextTitle}
          <ChevronRight />
        </Link>
      </Button>
    </div>
  );
};
export default Pager;
