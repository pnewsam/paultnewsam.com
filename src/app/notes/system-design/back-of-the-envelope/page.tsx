import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { H2 } from "@/components/typography/H2";
import { DataTypesTable } from "./_DataTypesTable";
import { BinaryDataTable } from "./_BinaryDataTable";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Back of the Envelope" tags={["System Design"]} />
        <H2>Data Types</H2>
        <DataTypesTable />

        <H2 className="mt-12">Binary Data</H2>
        <BinaryDataTable />
      </section>
    </Container>
  );
}
