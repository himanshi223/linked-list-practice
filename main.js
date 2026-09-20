import { LinkedList } from "./linked-list.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.insertAt(3, "snail", "rabbit");
console.log(list.toString());
list.removeAt(6);
console.log(list.toString());