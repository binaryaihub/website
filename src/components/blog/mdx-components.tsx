import * as React from "react";

export const mdxComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-10 scroll-m-20 text-4xl font-bold tracking-tight"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-10 scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mt-6 border-l-2 border-primary pl-6 italic" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-card p-4"
      {...props}
    >
      {children}
    </pre>
  ),
  a: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-border" {...props} />
  ),
};
