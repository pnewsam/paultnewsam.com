import { CodeBlock } from "@/components/CodeBlock";
import { Container } from "@/components/Container";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { H3 } from "@/components/typography/H3";

import { BlogPageHeader } from "../_components/BlogPageHeader";

export default function NotesOnMemoryManagementInJavascript() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <BlogPageHeader slug="notes-on-memory-management-in-javascript" />
      </section>
    </Container>
  );
}
