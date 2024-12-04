function graphTraversal() {
  type Node = string;
  type AdjacencyList = Map<Node, Node[]>;

  function dfs(start: Node, graph: AdjacencyList) {
    const visited = new Set();

    function doDfs(node: Node) {
      if (visited.has(node)) return;
      visited.add(node);
      console.log(node);
      for (const neighbor of graph.get(node) || []) {
        doDfs(neighbor);
      }
    }

    doDfs(start);
  }

  function dfsIterative(start: Node, graph: AdjacencyList) {
    const visited = new Set();
    const stack: Node[] = [start];

    while (stack.length > 0) {
      const node = stack.pop();
      if (visited.has(node)) continue;
      visited.add(node);
      console.log(node);
      for (const neighbor of graph.get(node as Node) || []) {
        stack.push(neighbor);
      }
    }
  }

  function bfs(start: Node, graph: AdjacencyList) {
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
  }

  return { dfs, dfsIterative, bfs };
}
