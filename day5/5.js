// 객체의 spread
const square = {
    width: 200,
    height: 200
}

// color: 'red' 추가
const colorSquare = {
    // width: 200,
    // height: 200,
    ...square,
    color : 'red'
}

// 배열의 spread

const catTypeAnimals = ['고양이', '호랑이'];
const dogTypeAnimal = ['개', '늑대'];

const allTypeAnimals = [...catTypeAnimals, ...dogTypeAnimal, '비버'];