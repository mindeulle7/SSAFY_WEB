// 프론트
// 데이터 + 보이는 view단을 일치화하는 작업
// 데이터를 실어서 html태그를 만들어서 리스트로 뿌려주면
// `
//     <div>
//         ${title}
//     </div>
// `

// Array.forEach
// [1,2,3].forEach(콜백함수)
// 원소의 개수만큼 콜백함수가 실행된다.
// function aa () {}

// [3,5,4,2].forEach((value) => {
//     console.log(value);
//     console.group("");
//     return;
// })

// const array = [-5, 3, 4, 2, -7, -2, 7];

// let plusArray = [];
// let minusArray = [];

// array.forEach( el => { 
//     if(el > 0) plusArray.push(el);
//     else minusArray.push(el);
// });

//some, every
// some : 한가지만 만족해도 true 리턴
// every : 모두 만족해야 true 리턴

const array = [1,2,3,4,5];

// {return el > 0}
array.every(el => el > 0);

// find
// 특정 요소를 찾아준다.
const inventory = [ 
    { name : "A", count : 1 },
    { name : "B", count : 2 },
    { name : "C", count : 3 }
];

// find 특정 조건을 만족하는 첫번째 값
inventory.find(el => el.name === "B");

// findIndex 특정조건을 만족하는 첫번째 인덱스
inventory.findIndex(el => el.name === "B");


