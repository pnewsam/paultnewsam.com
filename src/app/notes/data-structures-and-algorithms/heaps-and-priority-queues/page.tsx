import CodeSnippet from "@/components/CodeSnippet";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Callout from "../../_components/Callout";
import Card from "@/components/Card";
import { H2 } from "@/components/typography/H2";
import { Body } from "@/components/typography/Body";

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

export default function HeapsAndPriorityQueuesPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Heaps and Priority Queues"
          tags={["Data Structures", "Typescript"]}
        />
        <Body>A min heap implementation in Typescript.</Body>
        <CodeSnippet code={snippet} language="typescript" />

        <Card className="p-12">
          <H2 className="mb-8">Problems to Solve</H2>
          <ul className="list-disc list-inside text-xl/relaxed md:text-2xl/relaxed">
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/kth-largest-element-in-an-array/"
              >
                215. Kth Largest Element in an Array
              </a>
            </li>
            <li className="mb-4">
              <a
                className="text-cyan-500 dark:text-cyan-400 hover:underline"
                href="https://leetcode.com/problems/merge-k-sorted-lists/"
              >
                23. Merge K Sorted Lists
              </a>
            </li>
          </ul>
        </Card>
      </section>
    </Container>
  );
}
