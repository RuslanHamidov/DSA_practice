const List = require('./list');


var my_list = new List()



for (var i = 10; i < 50; i += 10) {
    my_list.push(i)
}

for (value of my_list.memory) {
    console.log(value)
}
console.log("---------------")
console.log("Pop")
my_list.pop() // remove last element

for (value of my_list.memory) {
    console.log(value)
}

console.log("---------------")

console.log("Shift")
my_list.shift() // remove first element

for (value of my_list.memory) {
    console.log(value)
}

console.log("---------------")
console.log("Unshift")
my_list.unshift(50) // add element to the beginning

for (value of my_list.memory) {
    console.log(value)
}