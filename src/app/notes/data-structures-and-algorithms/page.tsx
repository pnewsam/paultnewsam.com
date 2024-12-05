import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { ExternalLink } from "@/components/typography/ExternalLink";
import { Category } from "@/constants/pageMetadata";
import { problems } from "@/constants/problems";

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
          tags={[Category.DataStructuresAndAlgorithms]}
        />
        <Body>
          When you&apos;re doing everyday web development, you rarely have to
          think too deeply about data structures and algorithms. The most
          pressing problems almost always lie in other domains, and as long as
          you have a good grasp of the basic concepts, you&apos;ll generally be
          fine. However, data structures and algorithms are core to how
          computers and programs function, and having a strong understanding of
          them will make you more aware of the real constraints that software
          operates against, and open your mind to what&apos;s possible with your
          own projects and tooling.
        </Body>
        <Body>
          There are lots of great resources out there for learning about data
          structures and algorithms. Of course, you&apos;re going to want to do
          problems on{" "}
          <ExternalLink href="https://leetcode.com">Leetcode</ExternalLink>.
          It&apos;s the authoritative source for top interview questions.
          Curated lists like the{" "}
          <ExternalLink href="https://leetcode.com/studyplan/top-interview-150/">
            Top Interview 150
          </ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://leetcode.com/studyplan/leetcode-75/">
            Leetcode 75
          </ExternalLink>{" "}
          help narrow down the list of problems you need to solve. But I would
          argue that, even before diving into one of those curated lists,
          it&apos;s helpful to get some exposure to the key concepts and
          strategies you&apos;ll need to know.
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
