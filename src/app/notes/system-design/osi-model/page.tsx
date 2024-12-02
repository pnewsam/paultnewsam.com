import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

export default function Page() {
  return (
    <Container>
      <section>
        <PageHeader title="OSI Model" tags={["system design"]} />
      </section>
    </Container>
  );
}
