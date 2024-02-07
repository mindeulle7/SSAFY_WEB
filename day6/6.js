const arr = [1,2,3,4,5,6,7,8,9,10];
arr.filter(el => el%2===0).map(el => el* 10);

const arr2 = [1,2,3,4,5,6,7,8,9,10];

arr2.reduce((acc,cur) =>{
    if(cur % 2 === 0){
        acc.push(cur * 10);
    }
    return acc;
}, []);
