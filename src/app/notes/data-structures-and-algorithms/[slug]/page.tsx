import { notFound } from "next/navigation";

import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { dataStructuresAndAlgorithmsPagesBySlug } from "@/constants/pages";
import { Subject } from "@/types/subject";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const page = dataStructuresAndAlgorithmsPagesBySlug[params.slug];

  if (!page) {
    notFound();
  }

  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title={page.title}
          tags={[Subject.DataStructuresAndAlgorithms]}
        />
        <Callout title="Key Concepts" className="mb-8">
          {page.concepts}
        </Callout>

        {page.Content && <page.Content />}

        <Summary problems={page.problems} />
      </section>
    </Container>
  );
}
