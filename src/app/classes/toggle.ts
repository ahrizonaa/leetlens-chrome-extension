export default class Toggle {
  name: string;
  value?: any;
  isButton?: boolean;
  constructor(name: string, value = false, isButton = false) {
    this.name = name;
    this.value = value;
    this.isButton = isButton;
  }

  isWeighted() {
    return this.name == 'Weighted' && this.value;
  }

  isDirected() {
    return this.name == 'Directed' && this.value;
  }

  isDoubly() {
    return this.name == 'Doubly' && this.value;
  }

  isBST() {
    return this.name == 'BST' && this.value;
  }

  isMaxHeap() {
    return this.name == 'MaxHeap' && this.value;
  }

  isMinHeap() {
    return this.name == 'MinHeap' && this.value;
  }
}
