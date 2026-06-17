let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

let button = document.querySelector(".btn");
let ps = document.querySelector(".setup");
let pd = document.querySelector(".delivery");
button.addEventListener("click", async () => {
    let joke = await getJoke(url);
    if (joke != null) {
        if (joke.type === "single") {
            ps.textContent = joke.joke;
            ps.classList.add('p');
        } else {
            ps.textContent = joke.setup;
            pd.textContent = joke.delivery;
            ps.classList.add('p');
            pd.classList.add('p');
        }
    }
});


async function getJoke(url) {
    try {
        let response = await axios.get(url);
        return response.data;
    } catch (e) {
        return null;
    }
}