import LinkedList from './linkedList.js'

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())

console.log('Index:', list.find('hamster'))
console.log('Number of Nodes:', list.size());
list.prepend('testing')
console.log('head', list.head)

console.log(list.toString())

list.pop()
console.log(list.toString())

list.removeAt(4)

console.log(list.toString())

list.insertAt('pepe', 2)

console.log(list.toString())

list.removeAt(9)
list.insertAt('Jose', 14)
console.log('Contains "cat":', list.contains('cat'))

console.log(list.at(2))

console.log(list.tail)
console.log(list.nodeHead)