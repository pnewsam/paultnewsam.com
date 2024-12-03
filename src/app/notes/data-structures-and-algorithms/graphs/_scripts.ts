type Vertex = string;
type AdjacencyList = Map<Vertex, Vertex[]>;

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

console.log(graph.adjacencyList);
