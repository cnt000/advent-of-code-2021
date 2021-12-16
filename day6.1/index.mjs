import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("test-input.txt", import.meta.url))
  .split(",")
  .map(Number);

class LanterFish {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  // get next() {
  //   return this.next;
  // }
  // get value() {
  //   return this.value;
  // }
  // set next(next) {
  //   this.next = next;
  // }
  // set value(value) {
  //   this.value = value;
  // }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  print() {
    let result = "";
    let current = this.head;
    if (current) {
      while (current.next) {
        result += `${current.value},`;
        current = current.next;
      }
      result += `${current.value}`;
    }
    return result;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

const totalDays = 257;

const state = [...input];

// creare un oggetto per ogni valore prima del giorno iniziale e linkarlo
// creare la linked list

// per ogni giorno, scorrere la lista, modificare il valore, applicare le condizioni (aggiungere 8 alla fine se serve)

let fish1 = new LanterFish(input[0]);
let previous = fish1;
for (let i = 1; i < input.length; i++) {
  let fish = new LanterFish(input[i]);
  previous.next = fish;
  previous = fish;
}
let list = new LinkedList(fish1);
console.log(list.print());


for (let i = 0; i < totalDays; i++) {
  let current = list.head;
  console.log(i, current.value);
  if (current) {
    while (current.next) {
      if (current.value === 0) {
        current.value = 6;
        const last = list.getLast();
        last.next = new LanterFish(8);
      } else {
        current.value = current.value - 1;
      }
      current = current.next;
    }
  }

  // console.log(`Day${i}`, list.print());
  //   state.forEach((_, i) => {
  //     if (state[i] === 0) {
  //       state[i] = 6;
  //       state.push(8);
  //     } else {
  //       state[i] = state[i] - 1;
  //     }
  //   });
  //   console.log(state.length);
}

console.log("day6.1", "solution:", list.size());
