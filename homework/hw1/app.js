const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto("https://loy124.github.io/vue-movie/");
  const movies = await page.evaluate(() => {
    const movieNamesEls = document.querySelectorAll(".movie-card .movie-information .movie-title");
    const names = Array.from(movieNamesEls).map((el) => el.textContent);
    
    const movieImagesEls = document.querySelectorAll(".movie-card .img-fluid");
    const images = Array.from(movieImagesEls).map((el) => el.src);

    // logic
    const movies = names.map((name, idx) => {
      return {
        title: name,
        imageSrc: images[idx],
      };
    });
    return movies;
  });
  console.log(movies);
  await browser.close();
};

main();