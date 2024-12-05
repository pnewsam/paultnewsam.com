import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Category } from "@/constants/pageMetadata";

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
        <ProblemsTable />
      </section>
    </Container>
  );
}
