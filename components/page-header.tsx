import { cn } from "@/lib/utils"

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("", className)} {...props}>
      <div className="">
        <div className="flex flex-col items-start gap-1 py-0">{children}</div>
      </div>
    </section>
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-2xl leading-tight font-bold tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderSubHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-lg leading-tight tracking-normal sm:text-lg md:text-xl lg:leading-[1.1]",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-foreground w-full text-left text-base font-light sm:text-lg",
        className
      )}
      {...props}
    />
  )
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "my-4 flex w-full items-center justify-start gap-2 pt-2",
        className
      )}
      {...props}
    />
  )
}

export {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
  PageHeaderSubHeading,
}
