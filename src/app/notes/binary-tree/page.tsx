import CodeSnippet from "@/components/CodeSnippet";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

const snippet = `
`;

export default function BinaryTreePage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Binary Tree"
          tags={["Data Structures", "Typescript"]}
          description="A binary tree implementation in Typescript."
        />
        <CodeSnippet code={snippet} language="typescript" />
      </section>
    </Container>
  );
}
