import Link from "next/link";
import { H1, H3, Body, BodySmall } from "@/components/typography";
import Container from "@/components/Container";

export default function HacksPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <H1 className="mb-6">Sandbox</H1>
        <Body>
          This is where I play around with ideas. Here are some of the things
          I&apos;ve built.
        </Body>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link
            className="bg-neutral-100 dark:bg-neutral-900 shadow-md hover:shadow-lg border border-neutral-200 dark:border-neutral-800 rounded-md p-8 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 transition-all duration-200 flex flex-col justify-between gap-4"
            href="/sandbox/canvas"
          >
            <H3>Canvas Whiteboard</H3>
            <BodySmall>A very basic whiteboard with HTML Canvas.</BodySmall>
          </Link>
        </div>
      </section>
    </Container>
  );
}
