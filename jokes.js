const jokeButton = document.querySelector(".getjoke");
const jokeHolder = document.querySelector(".joke");

const buttonText = [
    "Ugh.",
    "🤦🏻‍♂️",
    "omg dad.",
    "you are the worst",
    "seriously",
    "stop it.",
    "please stop",
    "that was the worst one",
];

async function fetchJoke() {
    const response = await fetch("http://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    return response.json();
}

async function handleClick() {
    // Using destructuring bc fetchJoke will return an object with properties 
    // of id, joke and status. We only want the joke property so we are destructuring 
    // the joke property to it's own variable.
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
    jokeButton.textContent = randomItemFromArray(
        buttonText,
        jokeButton.textContent
    );
}

function randomItemFromArray(arr, not) {
    const item = arr[Math.floor(Math.random() * arr.length)];
    if (item == not) {
        console.log("Ah! we used that one last time, look again");
        return randomItemFromArray(arr, not);
    }
}

jokeButton.addEventListener("click", handleClick);
