import CodeSnippet from "@/components/CodeSnippet";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";

const snippet = `function buildMinHeap(heap: number[]) {
  const len = heap.length;

  // Start at the penultimate level.
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    siftUp(heap, i);
  }
}

function siftUp(heap: number[], index: number) {
  let min = index;

  // Left and Right child nodes are located at 2x+1 and 2x+2
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  // Find the lesser of Left and Right, and assign it to min
  if (left < heap.length && heap[left] < heap[min]) {
    min = left;
  }
  if (right < heap.length && heap[right] < heap[min]) {
    min = right;
  }

  // If min has been assigned, swap it with the Parent
  if (min !== index) {
    const stash = heap[index];
    heap[index] = heap[min];
    heap[min] = stash;
    siftUp(heap, min);
  }
}
`;

export default function MinHeapPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Min Heap"
          tags={["Data Structures", "Typescript"]}
          description="A min heap implementation in Typescript."
        />
        {/* 
        <H2>What is a min heap?</H2>
        <Body>
          A min heap is a binary tree where each node is less than or equal to
          its children.
        </Body> */}
        <CodeSnippet code={snippet} language="typescript" />
      </section>
    </Container>
  );
}
