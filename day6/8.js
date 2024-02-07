const userInfos = [
    {
        id: "abc123",
        name : "abc",
        agd : 10,
    },
    {
        id: "def123",
        name : "def",
        agd : 11,
    },
    {
        id: "ghi123",
        name : "ghi",
        agd : 12,
    },
];

// userInfos.forEach((userInfo)=> {
//     console.log(userInfo.name);
// });

const names = userInfos.map((userInfo)=>`${userInfo.name}😊`);

console.log(names);

// 기본 배열에서 사이즈가 다른 배열을 만들고자 한다면 : filter

const filteredInfos = userInfos.filter((userInfo) => userInfo.age < 12);

console.log(filteredInfos);

const abc = userInfos.filter((userInfo) => userInfo.id === "abc123");

console.log(abc);