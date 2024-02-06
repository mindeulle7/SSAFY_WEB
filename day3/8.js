// class는 대문자로 시작

class Human{

    // 생성할 때 호출되는 초기화 메서드
    constructor(name){
        // 자기 자신을 가리키는 키워드 this
        this.name = name;
        console.log("hello");
    }

    sayMyName(){
        console.log(`이름 : ${this.name}`)
    }
}

const person1 = new Human("한동민");
person1.sayMyName();

const person2 = new Human("한동민2");
person1.sayMyName();

const person3 = new Human("한동민3");
person1.sayMyName();