const infos = [
  {
    name: "김창수",
    age: 30,
    family: ["할머니", "아내", "아들"],
  },
  {
    name: "이민주",
    age: 24,
    family: ["남편"],
  },
  {
    name: "박종식",
    age: 58,
    family: ["아들", "딸", "손자"],
  },
];

const names = infos.filter((info) => 25 < info.age).map((info) => info.name);

console.log(names);

const names2 = infos
  .filter((info) => info.family === "아들" || info.family === "딸")
  .map((info) => info.name);

console.log(names2);


// 안한서
// const child = infos
//   .filter(
//     (info) =>
//       info.family.filter((member) => (member === "아들") | (member === "딸"))
//         .length > 0
//   )
//   .map((info) => info.name);

// 이자룡
// const parentNames = infos
//   .filter((info) => {
//     let hasChild = false;
//     info.family.map((member) => {
//       if (member === "아들" || member === "딸") {
//         hasChild = true;
//       }
//     });
//     return hasChild;
//   })
//   .map((parents) => parents.name);