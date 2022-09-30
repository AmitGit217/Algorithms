// The main concept of "Stack" is the pop() & push(val) methods, there are a lot of ways to implement this kind of data structure.

// 1. Array
const array: Array<string> = [];
array.push("a"); // ['a']
array.push("b"); // ['a','b']
array.length; // 2
array.pop(); // ['a']
array.length; // 1
