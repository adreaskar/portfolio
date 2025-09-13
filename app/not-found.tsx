import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderSubHeading,
} from "@/components/page-header"

const NotFound = () => {
  return (
    <PageHeader className="mb-10">
      <PageHeaderHeading>404</PageHeaderHeading>
      <PageHeaderSubHeading className="text-muted-foreground mt-2">
        Page not found
      </PageHeaderSubHeading>
    </PageHeader>
  )
}
export default NotFound
