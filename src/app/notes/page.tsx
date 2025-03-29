import { Metadata } from "next";

import { LinkCard } from "@/app/notes/_components/LinkCard";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { dsaPages } from "@/constants/pages/dsaPages";

export const metadata: Metadata = {
  title: "Paul T. Newsam | Notes",
  description: "Notes on various topics",
};

const isDevelopment = process.env.IS_DEVELOPMENT === "true";

export default function NotesPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Notes" tags={[]} />
        <Body>
          I&apos;ve started to collect notes here that I find useful or
          interesting.
        </Body>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {[...dsaPages]
            // .filter((page) => isDevelopment || page.publishedAt)
            .map((page) => (
              <LinkCard
                key={page.slug}
                href={`/${page.slug}`}
                tags={[page.subject]}
                title={page.title}
                description={page.description}
              />
            ))}
        </div>
      </section>
    </Container>
  );
}
