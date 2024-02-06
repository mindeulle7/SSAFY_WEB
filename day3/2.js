// 백틱은 왼쪽 상단 tab 위에 있는 ``
// "" '' 처럼 사용이 가능하나 enter 인식이 가능
//js 또한 백틱안에 넣을 수 있다 ${자바스크립트}

const myName = "한동민";
const introduce = "제 이름은" + myName + "입니다";
const introduce2 = `제 이름은 ${myName} 입니다`;

const htmlTag = `
    <div>
        안녕하세요
    <\div>
`