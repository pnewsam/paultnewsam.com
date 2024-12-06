import { Metadata } from "next";

import { LinkCard } from "@/app/notes/_components/LinkCard";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { H2 } from "@/components/typography/H2";
import { systemDesignPages } from "@/constants/pages/systemDesignPages";
import { userInterfacePages } from "@/constants/pages/userInterfacePages";

import { DataStructuresAndAlgorithmsTable } from "./_components/DataStructuresAndAlgorithmsTable";

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
          {[...systemDesignPages, ...userInterfacePages].map((page) => (
            <LinkCard
              key={page.path}
              href={page.path}
              tags={page.tags}
              title={page.title}
              description={page.description}
            />
          ))}
        </div>

        {isDevelopment && (
          <div>
            <H2 className="mb-4">Data Structures & Algorithms</H2>
            <Body>
              <Bold>Data Structures and Algorithms</Bold> is a deep subject. You
              could spend years learning them. It can be overwhelming sorting
              through all the learning materials out there.
            </Body>
            <DataStructuresAndAlgorithmsTable />
          </div>
        )}
      </section>
    </Container>
  );
}
