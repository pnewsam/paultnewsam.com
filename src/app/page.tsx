import Link from "next/link";

import { Container } from "@/components/Container";
import { Tags } from "@/components/Tags";
import { React } from "@/components/icons/React";
import { Typescript } from "@/components/icons/Typescript";
import { Body } from "@/components/typography/Body";
import { ExternalLink } from "@/components/typography/ExternalLink";
import { H1 } from "@/components/typography/H1";
import { H2 } from "@/components/typography/H2";
import { H4 } from "@/components/typography/H4";
import { blogPages } from "@/constants/blog";

export default function Home() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <H1 className="mb-8">Hey, I&apos;m Paul.</H1>
        <Body>
          I&apos;m a frontend developer currently based in San Francisco, CA.
          Mostly I work with Typescript{" "}
          <Typescript className="w-8 h-8 inline -translate-y-1 mr-1" /> and
          React <React className="w-8 h-8 inline -translate-y-1 mr-1" />.
          Sometimes I build websites with my business{" "}
          <ExternalLink href="https://uxadvantage.com">
            UX Advantage
          </ExternalLink>
          .
        </Body>
        <Body className="mb-20">
          Before getting into softare, I worked in conservation and wildlife
          management research. In my spare time I like to read, go hiking,{" "}
          <ExternalLink href="https://photos.paultnewsam.com">
            take photos
          </ExternalLink>{" "}
          and spend time with my family and two cats.
        </Body>

        <H2 className="border-b pb-4">Blog</H2>

        <Body>
          Occasionally I write about my experiences and learnings here.
          It&apos;s a mix of notes-to-self, toy apps, and other musings. One of
          these days, I&apos;ll get around to getting a little more rigorous
          about it!
        </Body>
        <div className="grid gap-4 rounded-md">
          {blogPages.map((item) => (
            <Link
              href={`/blog/${item.slug}`}
              key={item.title}
              className="group py-3 -mx-4 px-4 rounded-md flex items-center justify-between gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <div>
                <H4 className="!mb-0 font-normal text-neutral-900 dark:text-white">
                  {item.title}
                </H4>
                <Body className="mb-0 font-normal !text-neutral-500" size="xs">
                  {item.publishedAt
                    ? new Date(item.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </Body>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Tags tags={[item.subject]} size="sm" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
