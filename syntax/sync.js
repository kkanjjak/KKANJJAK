var fs = require('fs');   // fs(파일시스템) 모듈 호출

/*
// 1. readFileSync

console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');

*/


// 2. readFile  비동기, callback,   비동기 -> 효율적 정보처리 가능

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');