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
          When you're doing web development, deep knowledge of data structures
          and algorithms rarely comes into play. The most pressing problems for
          a business or application almost always lie in other domains. However,
          the deeper you get into the field, the more you&apos;ll find that data
          structures and algorithms are everywhere.
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
