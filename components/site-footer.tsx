export const dynamic = "auto"

import { siteConfig } from "@/config/site"
import Link from "next/link"

// marking this as async for now
// maybe we can make this component dynamic with revalidate time in the future
export async function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-border bg-background/95 supports-[backdrop-filter]:bg-background/60 border-t py-2 backdrop-blur">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-center space-y-2 py-4">
          <div className="text-muted-foreground text-center text-xs sm:text-sm">
            Andreas Karabetian &copy; {currentYear}
          </div>
        </div>
      </div>
    </footer>
  )
}
