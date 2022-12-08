console.log(Math.round(1.6));   // Math -> 자바스크립트 내장 객체  round -> 함수 이름(반올림)  값 : 2
console.log(Math.round(1.4));  // 1

function sum(first, second){
    console.log(first + second);
}  //sum 함수와 () 괄호 안의 숫자를 연결해주는 매개변수가 필요함.

sum(2, 4);  // () 괄호 안의 입력값을 argument(인자)라고 함.

// 2, 4 -> argument(인자)  first, second -> parameter(매개변수)

// 내가 만든 함수는 sum(2, 4) => console.log(sum(2, 4))로 자동 실행
// 내장 함수는 console.log를 작성해야 값을 보여줌.
// 내장함수가 안 좋아보일 수 있으나, 내가 만든 함수는 융통성이 떨어짐.

/* filewrite('sda.txt', Math.round(1.6));
email('won1214kr@naver.com', Math.round(1.6)); 등 활용 가능(없는 함수임,,ㅋㅋ) 

하지만 function sum(first, second){
    console.log(first + second);} 는 언제나 같은 값
*/

function sum2(first, second){
    console.log('a');
    return first+second;
    console.log('b');
}  // return은 ① 값 출력 ② 즉시 함수 종료  두 개의 의미를 가짐

console.log(sum2(2, 4));