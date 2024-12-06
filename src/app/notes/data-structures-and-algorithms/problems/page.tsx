import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { problems } from "@/constants/problems";
import { Subject } from "@/types/subject";

import { ProblemsTable } from "./_components/ProblemsTable";

export default function ProblemsPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Problems"
          tags={[Subject.DataStructuresAndAlgorithms]}
        />
        <ProblemsTable problems={problems} />
      </section>
    </Container>
  );
}
