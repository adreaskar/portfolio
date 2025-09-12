import { highlightCode } from "@/lib/highlight-code"
import React from "react"

const CodeSnippet = async ({
  title,
  code,
}: {
  title: string
  code: string
}) => {
  const highlightedCode = await highlightCode(code)
  return (
    <React.Fragment>
      <h4 className="my-4 mb-2 scroll-m-20 text-lg font-semibold tracking-tight">
        {title}
      </h4>
      <div className="relative overflow-auto rounded-lg bg-black ring-1 ring-gray-700">
        <div
          data-rehype-pretty-code-fragment
          dangerouslySetInnerHTML={{
            __html: highlightedCode,
          }}
          className="w-full overflow-hidden [&_pre]:overflow-auto [&_pre]:!bg-black [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
        />
      </div>
    </React.Fragment>
  )
}
export default CodeSnippet
