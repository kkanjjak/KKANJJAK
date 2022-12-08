const { arrayBuffer } = require("stream/consumers");
const { compileFunction } = require("vm");

['a' , 'b', true , 12];

var arr = ['A', 'B', 'C', 'D'];
console.log(arr[2]);

arr[2] = 3;
console.log(arr);

console.log(arr.length);  // .length -> 개수

arr.push(4);
console.log(arr);