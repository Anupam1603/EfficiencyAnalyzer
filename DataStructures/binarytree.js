class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      if (!this.root) {
        this.root = new TreeNode(value);
      } else {
        this.insertNode(this.root, new TreeNode(value));
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    search(value) {
      return this.searchNode(this.root, value);
    }
  
    searchNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        return true;
      }
      if (value < node.value) {
        return this.searchNode(node.left, value);
      } else {
        return this.searchNode(node.right, value);
      }
    }
  
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(node, value) {
      if (!node) {
        return null;
      }
  
      if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
  
        const minValueNode = this.findMinNode(node.right);
        node.value = minValueNode.value;
        node.right = this.deleteNode(node.right, minValueNode.value);
      }
  
      return node;
    }
  
    findMinNode(node) {
      if (!node.left) {
        return node;
      }
      return this.findMinNode(node.left);
    }
  }
  
  module.exports = BinaryTree;
  