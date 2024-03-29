class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent - null;
  }

  add(value) {
    if (this.value === null) {
      this.value = value;
      return;
    }

    if (this.value < value) {
      if (this.right) {
        return this.right.add(value);
      }
      const node = new Node(value);
      node.parent = this;
      this.right = node;
      return;
    }

    if (this.value > value) {
      if (this.left) {
        return this.left.add(value);
      }
      const node = new Node(value);
      node.parent = this;
      this.left = node;
      return;
    }
  }

  remove(value) {
    const identifiedNode = this.find(value);
    if (!identifiedNode) {
      throw new Error("Node of value " + value + " not found!");
    }
    if (!identifiedNode.left && !identifiedNode.right) {
      const identifiedParent = identifiedNode.parent;
      identifiedParent.removeChild(identifiedNode);
      return;
    }
    if (identifiedNode.left && identifiedNode.right) {
      const nextBiggerNode = identifiedNode.right.findNext();
      if (nextBiggerNode.value !== identifiedNode.value) {
        this.remove(nextBiggerNode.value);
        identifiedNode.value = nextBiggerNode.value;
      } else {
        identifiedNode.value = identifiedNode.right.value;
        identifiedNode.right = identifiedNode.right.right;
      }
    } else {
      const childNode = identifiedNode.left || identifiedNode.right;
      identifiedNode.left = childNode.left;
      identifiedNode.right = childNode.right;
      identifiedNode.value = childNode.value;
    }

    if (identifiedNode.left) {
      identifiedNode.left.parent = identifiedNode;
    }
    if (identifiedNode.right) {
      identifiedNode.right.parent = identifiedNode;
    }
  }

  removeChild(node) {
    if (this.left && this.left === node) {
      this.left = null;
      return;
    }
    if (this.right && this.right === node) {
      this.right = null;
      return;
    }
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (this.value < value && this.right !== null) {
      return this.right.find(value);
    }

    if (this.value > value && this.left !== null) {
      return this.left.find(value);
    }
  }

  print() {
    console.log(
      `NODE DATA: value: ${this.value}, left: ${this.left?.value}, right: ${this.right?.value}, parent: ${this.parent?.value}`
    );
    if (this.left) {
      this.left.print();
    }
    if (this.right) {
      this.right.print();
    }
  }

  findNext() {
    if (!this.left) {
      return this;
    }
    return this.left.findNext();
  }
}

class BinarySearchTree {
  constructor() {
    this.root = new Node(null);
  }

  add(value) {
    this.root.add(value);
  }

  remove(value) {
    this.root.remove(value);
  }

  find(value) {
    return this.root.find(value);
  }

  print() {
    this.root.print();
  }
}

const tree = new BinarySearchTree();
tree.add(10);
tree.add(5);
tree.add(12);
tree.add(17);
tree.add(13);
tree.add(21);
tree.add(22);
tree.add(16);
tree.add(18);
tree.add(3);
tree.add(7);
tree.add(2);
tree.add(8);
tree.add(4);
tree.add(6);
tree.add(14);

tree.print();

console.log(tree.find(8));
console.log(tree.find(6));
console.log(tree.find(20));

tree.remove(2);
tree.remove(17);
tree.print();
