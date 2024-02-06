class Calculator{
    constructor(){
        this.result = 0;
    }

    add(number){
        this.result += number;
        return this;
    }
    sub(number){
        this.result -= number;
    }
    mul(number){
        this.result *= number;
    }
    getReuslt(){
        return this.result;
    }

}

const calculatror = new Calculator.add(5).sub(3).mul(10).add(20).getReuslt();