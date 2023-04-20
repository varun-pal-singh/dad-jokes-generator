const apiKey = "iyEiW0rSpps1oOCeMsmJIg==n1vg7RXtO9um8NcU";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};

async function getJoke() {
  jokeEl.innerText = "Updating...";
  btnEl.disabled = true;
  btnEl.innerText = "Loading...";

  const response = await fetch(apiURL, options);
  const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE"

  // console.log(data[0].joke);
  jokeEl.innerText = data[0].joke;
}

const btnEl = document.querySelector("#btn");
const jokeEl = document.querySelector("#joke");

btnEl.addEventListener("click", getJoke);
