/*
function a(){
    console.log('A');
}
a();
*/

var a = function(){
    console.log('A');
}  // 이름이 없는 함수 = 익명 함수    function a(){console.log('A');}와 같은 함수
// 함수가 변수 a의 값으로 표현되고 있음. 즉 Javascript에서는 함수 = 값임을 알 수 있음
a();  // ()라는 함수 호출 기호를 사용하여 함수인 값을 불러냄.


function slowfunc(callback){
    callback();
}

slowfunc(a);
/* 내 해석... function slowfunc(callback){callback();}  slowfunc라는 함수를 실행하면 callback();이라는 값이 나옴. slowfunck(); -> slowfunc라는 함수를 실행하여라. 그리고 callback(); -> callback이라는 변수가 가진 함수값 호출
slowfunc(a) -> slowfunc(callback) = slowfunc(a)  === parameter a = callback

slowfunc 함수 실행 시 callback();이라는 값이 나옴. callback(); 는 callback이라는 parameter가 가지는 함수값을 불러낸다는 의미임 === a();

따라서 function slowfunc(callback){callback();} 함수에서 slowfunc(a); 를 입력했을 때 a(); 값이 나오게 됨. === 정답 : A 
*/