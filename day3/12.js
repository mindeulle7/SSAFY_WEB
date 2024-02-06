class Human {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }

  hello() {
    console.log(this.name);
  }
}

class Avengers extends Human {
  constructor(name, hp, power, skill) {
    super(name, hp);
    this.power = power;
    this.skill = skill;
  }

  information() {
    console.log(this.name, this.hp, this.power, this.skill);
  }

  fly() {
    console.log("비행중");
  }
}

const ironMan = new Avengers("아이언맨", 100, 1000, "미사일");
ironMan.information();
ironMan.fly();


