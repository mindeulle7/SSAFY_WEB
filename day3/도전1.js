class Human{
    constructor(name, age, introduce){
        this.name = name;
        this.age = age;
        this.introduce = introduce;
    }
    intoduce(){
        console.log(`Name : ${this.name}`);
        console.log(`age : ${this.age}`);
        console.log(`introduce : ${this.introduce}`);
    }
}

const human = new Human("한동민", "26", "안녕하세요");
human.intoduce();
