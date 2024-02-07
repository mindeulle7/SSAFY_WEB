// 원시 자료형
// Number
typeof(100);
typeof(-100.1234);

// String
typeof("안녕하세요");

// Boolean
typeof(true);

// null
// 개발자가 의도적으로 비어놓는 것
// null 값이 비어있다고 명시하는 것
// typeof(null) <- object라 나오는것은 js 자체 버그
typeof(null);

// undefined
// 값이 아무것도 할당받지 못한 상태

// 참조 자료형 (아래 모두 객체로 취급된다.)
// Array

// new Array()
const hello = [1,2,3,4];
// const test = [1, "hello", true];

// Object
const reuslt = {a: 5, b: 10};
result['a'];
result.a;

// Function
const bb = function(){
    console.log("bb");
}

bb();

// ==
// js에서는 ===를 사용하길 권장
// 타입까지 맞는지 고려한다.

// const a = [1, 2, 3, 4];
// a.push(5);
// a.size();