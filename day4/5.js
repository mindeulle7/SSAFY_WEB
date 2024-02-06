// Array.reduce( (누적값, 현재값)=>{}, 초기값)

//초기값 생략시 배열의 첫번째 값

const datas = [1,2,3,4,5];
const result = datas.reduce((acc,cur) => {
    console.log(`acc : ${acc}`);
    console.log(`cur : ${cur}`);
    return acc + cur;
}, 0);

// filter

const test = datas.reduce((acc,cur) => {
    // 초기값을 정해줘야 특정 메서드 활용이 가능하다.
    if(cur === 2){
        acc.push(cur);
    }

    // 누산되어 넘겨줘야하기 때문에
    return acc;
}, []);


const arr = ["피카츄", "라이츄", "파이리", "꼬부기", "피카츄", "파이리"];

const result2 = arr.reduce((acc,cur)=>{
    if(acc[cur]){
        acc[cur] = acc[cur] + 1;
    }
    else{
        acc[cur] = 1;
    }
    return acc;
}, {});
