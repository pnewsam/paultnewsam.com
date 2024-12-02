import { CodeSnippet } from "@/components/CodeSnippet";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Body } from "@/components/typography/Body";
import { H3 } from "@/components/typography/H3";
import { Category } from "@/constants/pageMetadata";
import { trees } from "@/constants/problems";

import { Callout } from "../../_components/Callout";
import { Summary } from "../../_components/Summary";

const insertSnippet = `class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number, left: TreeNode | null, right: TreeNode | null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  root: TreeNode | null;

  constructor(root: TreeNode | null) {
    this.root = root;
  }
}

function insert(tree: Tree, value: number) {
  const node = new TreeNode(value, null, null);

  if (!tree.root) {
    tree.root = node;
    return;
  }

  let current: TreeNode = tree.root;
  while (true) {
    // Explore left tree
    if (value < current.value) {
      if (current.left) {
        current = current.left;
      } else {
        current.left = node;
        break;
      }
    } else {
      // Explore right tree
      if (current.right) {
        current = current.right;
      } else {
        current.right = node;
        break;
      }
    }
  }
}

// Create a new tree and add a few nodes
const tree = new Tree(null);
insert(tree, 5);
insert(tree, 8);
insert(tree, 3);`;

const traversalSnippet = `function inOrder(node: TreeNode | null): void {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

function preOrder(node: TreeNode | null): void {
  if (node !== null) {
    console.log(node.value);
    inOrder(node.left);
    inOrder(node.right);
  }
}

function postOrder(node: TreeNode | null): void {
  if (node !== null) {
    inOrder(node.left);
    inOrder(node.right);
    console.log(node.value);
  }
}`;

export default function BinaryTreeTraversalPage() {
  return (
    <Container>
      <section className="py-12 md:py-24">
        <PageHeader
          title="Trees"
          tags={[Category.DataStructuresAndAlgorithms]}
        />

        <Callout title="Key Concepts" className="mb-8">
          DFS; BFS; recursion
        </Callout>

        <Body>A binary tree implementation in Typescript.</Body>
        <div className="mb-8">
          <CodeSnippet code={insertSnippet} language="typescript" />
        </div>

        <H3 className="mb-4">Traversal</H3>
        <Body>
          Traversal can happen in in-order, pre-order, or post-order. In a&nbsp;
          <b>binary search tree</b>, in-order traversal will return the items in
          the proper order.
        </Body>
        <CodeSnippet code={traversalSnippet} language="typescript" />

        <Summary problems={trees} />
      </section>
    </Container>
  );
}
