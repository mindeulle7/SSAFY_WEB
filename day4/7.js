console.log("hi");

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 1000)
    })
}, 500);

// 콜백 : 가독성이 끔찍
// Promise, Async / Await