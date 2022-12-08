var name = 'jiyoon'
var letter = 'The HyperText Markup Language ' + name + '\n or HTML is the standard markup' + name + 'language for documents designed' + name + 'to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript';
console.log(letter)
//       \\ 코드상 줄바꿈  \n 실행 시 줄 바꿈

var letter = `The HyperText Markup Language ${name}


or HTML is the standard markup ${name} language for documents designed ${name} to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript`;

console.log(letter);

//     ` template literal   -> \n 같은 코드 없이 엔터로 줄바꿈 가능,   +변수+ 대신 ${변수}로 치환 가능해짐