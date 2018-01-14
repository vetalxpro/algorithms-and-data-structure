// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor( data, next = null ) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst( data ) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while ( node ) {
      counter += 1;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    let node = this.head;
    while ( node && node.next ) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head ? this.head.next : null;
  }

  removeLast() {
    if ( !this.head ) {
      return;
    }
    if ( !this.head.next ) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    while ( node.next ) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast( data ) {
    const last = this.getLast();
    if ( last ) {
      last.next = new Node(data);
    } else {
      this.insertFirst(data);
    }
  }

  getAt( index ) {
    if ( !this.head ) {
      return null;
    }
    let node = this.head;
    let counter = 0;
    while ( node ) {
      if ( counter === index ) {
        return node;
      }
      counter += 1;
      node = node.next;
    }
    return null;
  }

  removeAt( index ) {
    if ( !this.head ) {
      return;
    }
    if ( index === 0 ) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if ( prev && prev.next ) {
      prev.next = prev.next.next;
    }
  }

  insertAt( data, index ) {
    if ( index === 0 || !this.head ) {
      this.insertFirst(data);
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next);

  }

  forEach( fn ) {
    let node = this.head;
    let index = 0;
    while ( node ) {
      fn(node, index);
      node = node.next;
      index += 1;
    }
  }

  * [ Symbol.iterator ]() {
    let node = this.head;
    while ( node ) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
