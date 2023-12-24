class Node {
  constructor(value, parentNode = null) {
    this.children = [];
    this.value = value;
    this.parent = parentNode;
  }

  addNode(value) {
    // this.children.push(new Node(value, this));

    const node = new Node(value, this);
    this.children.push(node);
    return {
      node,
      index: this.children.length - 1,
    };
  }

  removeNode(index) {
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}

const user = new Tree("root");

const userInfoNodeData = user.root.addNode("userInfo");
const cartNodeData = user.root.addNode("cart");

userInfoNodeData.node.addNode("ErfunGhodosi");
cartNodeData.node.addNode("Book 1");

console.log(user);
