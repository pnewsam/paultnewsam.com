import { CodeBlock } from "@/components/CodeBlock";
import { Body } from "@/components/typography/Body";
import { H3 } from "@/components/typography/H3";

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

export function TreesContent() {
  return (
    <>
      <Body>A binary tree implementation in Typescript.</Body>
      <div className="mb-8">
        <CodeBlock code={insertSnippet} language="typescript" />
      </div>

      <H3 className="mb-4">Traversal</H3>
      <Body>
        Traversal can happen in in-order, pre-order, or post-order. In a&nbsp;
        <b>binary search tree</b>, in-order traversal will return the items in
        the proper order.
      </Body>
      <CodeBlock code={traversalSnippet} language="typescript" />
    </>
  );
}
