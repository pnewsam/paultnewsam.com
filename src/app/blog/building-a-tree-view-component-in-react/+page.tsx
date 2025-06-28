import { Container } from "@/components/Container";
import { Body } from "@/components/typography/Body";
import { H2 } from "@/components/typography/H2";

import { BlogPageHeader } from "../_components/BlogPageHeader";

export default function BackOfTheEnvelopeVisualsPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <BlogPageHeader slug="building-a-tree-view-component-in-react" />
        <Body>
          I built this tree view component as one of the technical challenges
          for my current role. Funnily enough it was pretty similar to one of
          the design system interview questions at my previous role. I think
          it&apos;s popular because it requires some consideration of recursion.
          You don&apos;t know how many levels deep the tree will be, so you need
          to be able to handle that.
        </Body>

        <H2>The Problem</H2>
        <Body>
          The problem was to build a tree view component that would be used in
          the design system.
        </Body>
      </section>
    </Container>
  );
}
