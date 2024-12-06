import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";

import { DataTypeSizesTable } from "./_DataTypeSizesTable";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader title="Data Type Sizes" tags={["System Design"]} />
        <Body>
          A table of data type sizes in Postgres, useful for
          back-of-the-envelope calculations. The values will differ for
          different database systems, but the relative sizes will be similar.
          Squares are scaled in size logarithmically.
        </Body>

        <DataTypeSizesTable />

        {/* <H2 className="mt-12">Binary Data</H2>
        <Card>
          <BinaryDataTable />
        </Card> */}
      </section>
    </Container>
  );
}
