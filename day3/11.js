// 생성자에 인자가 없는 경우 상속


class Hero{
    constructor(){
        this.hp = 100;
    }
    run(){
        this.hp = this.hp - 10;
    }
}


class Superman extends Hero{
    fly(){
        console.log("fly");
        console.log(this.hp);
    }
}

const superman = new Superman();
superman.run();

// 생성자에 인자가 있는 경우 상속

class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name}이 울부짖습니다`);
    }
}

class Cat extends Animal{
    constructor(name){
        // Animal에 constructor 안에 name을 넣어줘야한다.
        // 이 때 사용하는 키원드가 super 키워드
        // 부모 생성자 호출
        super(name);

    }
    walk(){
        // 부모 클래스에 정의된 메서드 호출
        super.speak();
        console.log("걷습니다");
    }
}

const cat = new Cat("호랑이");
cat.walk();

