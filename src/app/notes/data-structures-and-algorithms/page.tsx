import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
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
          When you're doing web development, deep algorithmic thinking rarely
          comes into play. The most pressing problems for a business or
          application almost always lie in other domains. However, data
          structures and algorithms are core to how computers and programs
          function. And having a strong foundational understanding of them will
          make you more aware of the real constraints that software operates
          against, and open your mind to what may be possible with your own
          projects and tooling.
        </Body>
        <Body>
          This section is a collection of data structures and algorithms that I
          have studied.
        </Body>
        <ProblemsTable problems={problems} />
      </section>
    </Container>
  );
}
