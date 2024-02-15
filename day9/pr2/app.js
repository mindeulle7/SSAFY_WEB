const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto("http://www.cgv.co.kr/movies/?lt=1&ft=0");
  const movies = await page.evaluate(() => {
    const movieNamesEls = document.querySelectorAll(".sect-movie-chart .title");
    const titles = Array.from(movieNamesEls).map((el) => el.textContent);

    const movieScoreEls = document.querySelectorAll(".score > strong.percent");
    const scores = Array.from(movieScoreEls).map((el) => el.textContent);

    // logic
    const movies = titles.map((title, idx) => {
      return {
        title: title,
        score: scores[idx],
      };
    });
    return movies;
  });
  console.log(movies);
  await browser.close();
};

main();