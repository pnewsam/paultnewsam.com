import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { ExternalLink } from "@/components/typography/ExternalLink";
import { problems } from "@/constants/problems";
import { Subject } from "@/types/subject";

import { ProblemsTable } from "../_components/ProblemsTable";

export const metadata = {
  title: "Paul T. Newsam | Notes | Data Structures and Algorithms",
  description: "A list of data structures and algorithms.",
};

export default function DataStructuresAndAlgorithmsPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Data Structures and Algorithms"
          tags={[Subject.DataStructuresAndAlgorithms]}
        />
        <Body>
          When you&apos;re doing everyday web development, you rarely have to
          think very deeply about data structures and algorithms. You need to
          know a little about caching, how to store data efficiently, maybe how
          to traverse a tree or implement a basic recursive function. But you
          rarely have to, say, implement a hash table.
        </Body>
        <Body>
          But if your knowledge of data structures and algorithms remains
          surface-level, you&apos;re doing yourself a disservice. They underpin
          all of computer systems. And having a strong understanding of them
          will make you a better developer.
        </Body>
        <Body>
          There are lots of great resources out there for learning data
          structures and algorithms. Of course, you&apos;re going to want to do
          problems on{" "}
          <ExternalLink href="https://leetcode.com">Leetcode</ExternalLink>.
          It&apos;s the best, most comprehensive source of practice problems.
          Curated lists like the{" "}
          <ExternalLink href="https://leetcode.com/studyplan/top-interview-150/">
            Top Interview 150
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://leetcode.com/studyplan/leetcode-75/">
            Leetcode 75
          </ExternalLink>{" "}
          help narrow down the list of problems you need to solve. But even
          before diving into one of those curated lists, you might want to get
          exposure to some of the key concepts.
        </Body>
        <Body>
          There are a couple of resources I would especially recommend for that:
          the&nbsp;
          <ExternalLink href="https://cses.fi/book/book.pdf">
            Competitive Programming Handbook
          </ExternalLink>{" "}
          (if you prefer books) and{" "}
          <ExternalLink href="https://neetcode.io/roadmap">
            Neetcode
          </ExternalLink>{" "}
          (if you prefer video content). Both are fantastic resources that
          provide a structured approach to learning the core data structures and
          algorithms.
        </Body>
        <Body>
          I&apos;ve started collecting my own thoughts and notes here, just in
          case none of those other resources are helpful.
        </Body>
        <ProblemsTable problems={problems} />
      </section>
    </Container>
  );
}
