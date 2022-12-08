/* 
object         vs           array
순서 x                     순서 o
식별: 이름                 식별: 숫자(인덱스 0, 1, 2, 3, ''')
*/

var members = ['apple', 'grape', 'pear'];   // 배열 리터럴은 []
console.log(members[1]);

var roles = {
    'programmer':'kiwon',
    'writer':'jiyoon',
    'manager':'tteki',
    'designer':'aeno'
};  // 객체 리터럴은 {}

console.log(roles.writer);