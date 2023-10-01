// get the button element(tell me a joke)
const btn = document.getElementById("btn");
// get the paragraph element(to display the jokes)
const joke = document.getElementById("joke");

// my api key
const apiKey = "v4Xr6wAJYO8ji5/SrAagSQ==OFrTwTT9sgKnYS5K";
// const dad jokes api link
const apiLink = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function reponse() {
  try {
    joke.innerHTML = "Getting joke....";
    btn.disabled = true;
    btn.innerHTML = "Loading";
    const getJoke = await fetch(apiLink, options);
    const data = await getJoke.json();
    joke.innerHTML = data[0].joke;
    btn.disabled = false;
    btn.innerHTML = "Tell me a joke";
  } catch (error) {
    joke.innerHTML = "Error: Please try again.."
    btn.disabled = false;
    btn.innerHTML = "Tell me a joke"
  }
}

btn.addEventListener("click", reponse);
