const names = ["Bob", "Alice", "Carol", "George", "Jose", "Tom"];
const prices = [51, 20, 93, 121, 39, 12, 45, 112, 75];
const occupations = [
    "Programmer",
    "Truck Driver",
    "Gardner",
    "Teacher",
    "Writer",
];
const maxFreelancers = 10;
const people = [
    {
        name: "Dr.Slice",
        price: 25,
        occupation: "Gardner",
    },
    {
        name: "Dr.Pressure",
        price: 51,
        occupation: "Programmer",
    },
];

const addFreelancerIntervalId = setInterval(addFreelancer, 5000);

render();

function render() {
    // Render the list of freelancers
    const freelancers = document.querySelector("#freelancers");
    const freelancerElements = people.map((person) => {
        const element = document.createElement("li");
        element.textContent = `Name: ${person.name} Occupation: ${person.occupation} Price: ${person.price}`;
        element.classList.add("freelancer");
        // freelancers.appendChild(element);
        return element;
    });
    freelancers.replaceChildren(...freelancerElements);

    // Average price
    const avgPrice = document.querySelector("#avgPrice");
    const averagePrice = getAveragePrice();
    avgPrice.textContent = `Average Starting Price: ${averagePrice}`;
}

function getAveragePrice() {
    return Math.round(
        people.reduce((accum, currentPrice) => accum + currentPrice.price, 0) /
            people.length,
    );
}

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation =
        occupations[Math.floor(Math.random() * occupations.length)];
    people.push({ name: name, price: price, occupation: occupation });
    render();

    if (people.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId);
    }
}
