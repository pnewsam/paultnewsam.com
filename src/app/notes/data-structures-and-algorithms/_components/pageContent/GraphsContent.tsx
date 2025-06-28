import { CodeBlock } from "@/components/CodeBlock";
import { Body } from "@/components/typography/Body";
import { Bold } from "@/components/typography/Bold";
import { H3 } from "@/components/typography/H3";
import { Card } from "@/components/ui/card";

import { GraphSvg } from "../_GraphSvg";

export function GraphsContent() {
  return (
    <>
      <Body>
        <p>
          A <Bold>graph</Bold> is a data structure that consists of{" "}
          <Bold>nodes</Bold> and <Bold>edges</Bold>. Nodes are connected by
          edges, and edges can have weights. The classic example of a graph data
          structure is a social network. Each node represents a user, and each
          edge represents a connection between two users.
        </p>
      </Body>

      <Card>
        <GraphSvg />
      </Card>
      {/* TODO: Add back in */}
      {/* <ArtBoard /> */}

      <Body>
        <p>
          A graph can be represented in code in different ways. The most common
          ways are to use <Bold>adjacency lists</Bold>, an{" "}
          <Bold>adjacency matrix</Bold>, or <Bold>edge lists</Bold>.&nbsp;
          <Bold>Adjacency lists</Bold> map each node to a list of its neighbors.
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
        <Bold>Adjacency matrices</Bold> instead store a matrix of booleans that
        represent whether an edge exists between two nodes. For undirected
        graphs, the matrix will always be symmetric. For directed graphs, it may
        not be. The booleans may be replaced with weights if the graph is
        weighted.
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
        <Bold>Edge lists</Bold> map each edge to a list of its nodes. This
        representation is useful for graphs with few edges, but not as useful
        for graphs with many edges. This is because it requires O(E) space,
        where E is the number of edges.
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
        Traversing graphs will depend a little bit based on the representation
        of the graph. But the general idea is the same, and there are two
        algorithms that are commonly used: <Bold>Depth-First Search (DFS)</Bold>{" "}
        and&nbsp;
        <Bold>Breadth-First Search (BFS)</Bold>. DFS is generally simpler, so
        we&apos;ll start with that. We&apos;ll use an adjacency list for our
        examples.
      </Body>

      <div className="mb-8">
        <CodeBlock
          language="typescript"
          label="DFS"
          code={`type Node = string;
type AdjacencyList = Map<Node, Node[]>;

function dfs(start: Node, graph: AdjacencyList) {
  const visited = new Set();

  function doDfs(node: Node) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node); // Do something with node
    for (const neighbor of graph.get(node) || []) {
      doDfs(neighbor);
    }
  }

  doDfs(start);
}`}
        />
      </div>

      <Body>
        The important thing to note is that we&apos;re using a <Bold>Set</Bold>{" "}
        to keep track of visited nodes. This will ensure that we don&apos;t
        visit the same node twice, and prevent infinite loops in cyclic graphs.
        DFS can also be implemented iteratively.
      </Body>

      <CodeBlock
        className="mb-8"
        label="DFS Iterative"
        language="typescript"
        code={`type Node = string;
type AdjacencyList = Map<Node, Node[]>;
  
function dfsIterative(start: Node, graph: AdjacencyList) {  
  const visited = new Set();
  const stack: Node[] = [start];

  while (stack.length > 0) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    console.log(node); // Do something with node
    for (const neighbor of graph.get(node as Node) || []) {
      stack.push(neighbor);
    }
  }
}`}
      />

      <Body>
        Note that for both DFS implementations, the iteration over neighbors
        ensures that we visit the deepest nodes first.
      </Body>

      <Body>
        Breadth-First Search (BFS) is similar to DFS, but instead uses a queue
        to keep track of the nodes to visit.
      </Body>

      <CodeBlock
        className="mb-8"
        label="BFS"
        language="typescript"
        code={`function bfs(start: Node, graph: AdjacencyList) {
  const visited = new Set();
  const queue: Node[] = [start];

  while (queue.length > 0) {
    const node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    console.log(node);
    for (const neighbor of graph.get(node as Node) || []) {
      queue.push(neighbor);
    }
  }
}`}
      />
    </>
  );
}
