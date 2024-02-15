// const puppeteer = require("puppeteer");

// const main = async () => {
//     const brower = await puppeteer.launch({
//         headless: "new",
//     });
//     const page = await brower.newPage();

//     await page.goto("https://google.co.kr");
//     await page.evaluate(() => {
//         document.querySelector(".gLFyf").value = "치킨";
//         document.querySelector("input.gNO89b").click();

//     })

//     await page.waitForSelector("#result-stats");
//     await page.screenshot({ path: "screenshot.jpg", fullPage: true });
//     await brower.close();
// }

// main();



// const express = require("express");
// const app = express();
// const PORT = 8080;

// const cors = require("cors");
// app.use(cors());

// app.get("/", (req,res) => {
//     return res.sendFile(__dirname + "/views/index.html");
// });

// app.get("/login", (req,res) => {
//     return res.sendFile(__dirname + "/views/login.html");
// });

// app.get("/whoami", (req,res) => {
//     return res.sendFile(__dirname + "/views/whoami.html");
// });

// app.listen(PORT, () => console.log(`이 서버는 ${PORT}번에서 작동합니다`));


// GET     /todos
// 다 가져온다.
// GET     /todos/:id
// 특정 id만 가져온다
// POST    /todos
// 특정 데이터 추가
// PUT     /todos
// 전체 데이터 수정
// PATCH   /todos/:id
// 하나의 데이터만 수정
// delete  /todos/:id
// 특정 id 데이터 삭제

const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
const { Puppeteer } = require("puppeteer")
app.use(cors());

app.use(express.json());

const infos = [
    {
        name: "나나",
        age: 12,
    },
    {
        name: "유진",
        age: 8,
    },
    {
        name: "재범",
        age: 40,
    },
]

app.get("/infos/names", (req, res) => {
    const names = infos.map((infos) => infos.name);
    return res.json(names);
});

app.get("/infos/ages", (req, res) => {
    const ages = infos.map((info) => info.age);
    return res.json(ages);
  });
  
  app.get("/infos/:id", (req, res) => {
    const id = req.params.id;
    return res.json(infos[id]);
  });

app.listen(PORT, () => console.log(`이 서버는 ${PORT}번에서 작동합니다`));