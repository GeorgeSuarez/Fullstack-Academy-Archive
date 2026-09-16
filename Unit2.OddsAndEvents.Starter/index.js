// TODO: this file! :)
document.addEventListener("DOMContentLoaded", () => {
    const numberBank = [];
    const input = document.querySelector('input[name="number"]');
    const output = document.querySelector("#numberBank output");
    const addNumBtn = document.querySelector("form");
    const oddsOutput = document.querySelector("#odds output");
    const evensOutput = document.querySelector("#evens output");
    const sortOneBtn = document.querySelector("#sortOne");
    const sortAllBtn = document.querySelector("#sortAll");

    function updateNumberBank() {
        output.textContent = numberBank.join(", ");
    }

    function updateOddsAndEvens() {
        const odds = numberBank.filter((num) => num % 2 !== 0);
        const evens = numberBank.filter((num) => num % 2 === 0);

        oddsOutput.textContent = odds.join(", ");
        evensOutput.textContent = evens.join(", ");
    }

    sortOneBtn.addEventListener("click", () => {
        if (numberBank.length > 0) {
            numberBank.sort((a, b) => a - b);
            updateNumberBank();
        }
    });

    sortAllBtn.addEventListener("click", () => {
        if (numberBank.length > 0) {
            numberBank.sort((a, b) => a - b);
            updateNumberBank();
            updateOddsAndEvens();
        }
    });

    addNumBtn.addEventListener("submit", (e) => {
        e.preventDefault();
        const num = parseInt(input.value, 10);
        if (!isNaN(num)) {
            numberBank.push(num);
            input.value = "";
            updateNumberBank();
            updateOddsAndEvens();
        }
    });
});
