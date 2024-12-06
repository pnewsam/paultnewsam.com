function adjacencyList() {
  type Node = string;
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
  // }
}

function adjacencyMatrix() {
  // Nodes: A, B, C, D, E
  const nodes = ["A", "B", "C", "D", "E"];
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
  // ]
}

function edgeList() {
  type Node = string;

  type Edge = [Node, Node];

  // Example Graph: A -- B, A -- C, B -- D, C -- E
  const edgeList: Edge[] = [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "E"],
  ];

  console.log(edgeList);

  // [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'B', 'D' ], [ 'C', 'E' ] ]
}
