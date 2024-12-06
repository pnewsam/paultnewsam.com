export function tree() {
  class TreeNode {
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
  insert(tree, 3);

  function inOrder(node: TreeNode | null): void {
    if (node !== null) {
      inOrder(node.left);
      console.log(node.value);
      inOrder(node.right);
    }
  }

  function preOrder(node: TreeNode | null): void {
    if (node !== null) {
      console.log(node.value);
      preOrder(node.left);
      preOrder(node.right);
    }
  }

  function postOrder(node: TreeNode | null): void {
    if (node !== null) {
      postOrder(node.left);
      postOrder(node.right);
      console.log(node.value);
    }
  }
}
