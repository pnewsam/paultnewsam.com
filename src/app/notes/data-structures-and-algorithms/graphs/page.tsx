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
            A graph can be represented in code using an{" "}
            <Bold>adjacency list</Bold>. In the same way that a Linked List node
            has a <Code>next</Code>
            property that stores its adjacent node, a graph node might have an
            <Code>adjList</Code> property that stores its (potentially many)
            adjacent nodes. Or, the adjacency list may be stored under a parent
            class as a <Code>Map</Code>.
          </p>
        </Body>

        <CodeBlock
          language="typescript"
          code={`type Node = string;
type AdjacencyList = Map<Node, Node[]>;

class Graph {
  adjacencyList: AdjacencyList;

  constructor() {
    this.adjacencyList = new Map();
  }
}

// Example usage
const graph = new Graph();
graph.adjacencyList.set("A", ["B", "C"]);
graph.adjacencyList.set("B", ["A", "C"]);
graph.adjacencyList.set("C", ["A", "B"]);

console.log(graph.adjacencyList);`}
        />

        <H3 className="mb-4">Traversal</H3>
        <Body>
          Graph traversal can be done using <Bold>BFS</Bold> or <Bold>DFS</Bold>
          .
        </Body>

        <Summary problems={graphs} />
      </section>
    </Container>
  );
}
