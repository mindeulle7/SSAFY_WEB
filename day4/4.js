const datas = [3, 5, 4, 2];

const filterDatas = datas.filter(data => {
    // if(data > 3){
    //     return data;
    // }
});

const bucketList = [
    {
        id: 1,
        text: "여행 가기",
        done : false,
    },
    {
        id: 2,
        text: "치킨 먹기",
        done : true,
    },
    {
        id: 3,
        text: "코딩 하기",
        done : true,
    },
    {
        id: 4,
        text: "요리 하기",
        done : false,
    },
]

// const filterBucket = bucketList.filter(el =>{
//     if(el.done === false){
//         return el;
//     }
// });

const todos = [];
for (let i =0; i<bucketList.length; i++){
    const li = bucketList[i];
    if(li.done === false){
        todos.push(li);
    }
}