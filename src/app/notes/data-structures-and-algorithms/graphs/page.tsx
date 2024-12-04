import { Card } from "@/components/Card";
import { CodeBlock } from "@/components/CodeBlock";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { Code } from "@/components/typography/Code";
import { H3 } from "@/components/typography/H3";
import { Category } from "@/constants/pageMetadata";
import { graphs } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";
import { GraphSvg } from "./_GraphSvg";

export default function Page() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Graphs"
          tags={[Category.DataStructuresAndAlgorithms]}
        />
        <Callout title="Key Concepts" className="mb-8">
          BFS; DFS; adjacency lists; detecting cycles
        </Callout>

        <Body>
          <p>
            A <Bold>graph</Bold> is a data structure that consists of{" "}
            <Bold>nodes</Bold> and <Bold>edges</Bold>. Nodes are connected by
            edges, and edges can have weights. The classic example of a graph
            data structure is a social network. Each node represents a user, and
            each edge represents a connection between two users.
          </p>
        </Body>

        <Card className="mb-8 overflow-hidden flex justify-center">
          <GraphSvg />
        </Card>

        <Body>
          <p>
            A graph can be represented in code in different ways. The most
            common ways are to use <Bold>adjacency lists</Bold>, an{" "}
            <Bold>adjacency matrix</Bold>, or <Bold>edge lists</Bold>.&nbsp;
            <Bold>Adjacency lists</Bold> map each node to a list of its
            neighbors.
          </p>
        </Body>

        <CodeBlock
          className="mb-8"
          label="Adjacency List"
          language="typescript"
          code={`type Node = string;
type AdjacencyList = Map<Node, Node[]>;

// Example Graph: A -- B, A -- C, B -- D, C -- E
const adjacencyList: AdjacencyList = new Map([
  ["A", ["B", "C"]],
  ["B", ["A", "D"]],
  ["C", ["A", "E"]],
  ["D", ["B"]],
  ["E", ["C"]],
]);

console.log(adjacencyList);

// Map(5) {
//   'A' => [ 'B', 'C' ],
//   'B' => [ 'A', 'D' ],
//   'C' => [ 'A', 'E' ],
//   'D' => [ 'B' ],
//   'E' => [ 'C' ]
// }`}
        />

        <Body>
          <p>
            <Bold>Adjacency matrices</Bold> map each node to a list of its
            neighbors.
          </p>
        </Body>

        <CodeBlock
          className="mb-8"
          label="Adjacency Matrix"
          language="typescript"
          code={`const nodes = ["A", "B", "C", "D", "E"];
const adjacencyMatrix: number[][] = [
  //  A  B  C  D  E
  [0, 1, 1, 0, 0], // A
  [1, 0, 0, 1, 0], // B
  [1, 0, 0, 0, 1], // C
  [0, 1, 0, 0, 0], // D
  [0, 0, 1, 0, 0], // E
];

console.log(adjacencyMatrix);

// [
//   [ 0, 1, 1, 0, 0 ],
//   [ 1, 0, 0, 1, 0 ],
//   [ 1, 0, 0, 0, 1 ],
//   [ 0, 1, 0, 0, 0 ],
//   [ 0, 0, 1, 0, 0 ]
// ]`}
        />

        <Body>
          <p>
            <Bold>Edge lists</Bold> map each edge to a list of its nodes.
          </p>
        </Body>

        <CodeBlock
          className="mb-8"
          label="Edge List"
          language="typescript"
          code={`type Node = string;

type Edge = [Node, Node];

// Example Graph: A -- B, A -- C, B -- D, C -- E
const edgeList: Edge[] = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "E"],
];

console.log(edgeList);

// [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'D' ], [ 'C', 'E' ] ]`}
        />

        <H3 className="mt-20 mb-4">Traversal</H3>
        <Body>
          Graph traversal can be done using{" "}
          <Bold>Depth-First Search (DFS)</Bold> or&nbsp;
          <Bold>Breadth-First Search (BFS)</Bold>. DFS is generally simpler.
        </Body>

        <div className="mb-8">
          <CodeBlock language="typescript" code={``} />
        </div>

        <Summary problems={graphs} />
      </section>
    </Container>
  );
}
