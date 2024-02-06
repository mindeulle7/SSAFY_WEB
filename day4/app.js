// 서버에서 데이터를 받아 올때 쓰는 방식
// 해당 과정이 빠른 시간안에 이루어지지 않기 때문에 밑에 방식을 사용


// 1. 첫번째 방법
// axios
//   .get("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => {
//     // 구현 로직
//     console.log(response.data);
//   })
//   .catch((error) => console.error(error));


// 2. 두번째 방법
// async : 비동기
// await : 해당 동작을 기다림
async function fetchTodos() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchTodos();
