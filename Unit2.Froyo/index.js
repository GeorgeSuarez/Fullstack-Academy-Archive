// Prompt the user for a list of froyo flavors
const userInput = prompt(
    "Please enter some froyo flavors seperated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee",
);

// Split the string of froyoFlavors seperated by commas
const froyoFlavors = userInput.split(",");

function generateFroyoOrder() {
    const froyoOrders = [];
    for (let i = 0; i < froyoFlavors.length; i++) {
        froyoOrders.push({
            flavor: froyoFlavors[i],
            count: countFroyoFlavors(froyoFlavors[i]),
        });
    }
    return froyoOrders;
}

function countFroyoFlavors(target) {
    let count = 0;
    for (let i = 0; i < froyoFlavors.length; i++) {
        if (froyoFlavors[i] === target) {
            count++;
        }
    }
    return count;
}

function displayFroyoOrder(froyoOrders) {
    for (const order in froyoOrders) {
        console.log(
            `Flavor: ${froyoOrders[order].flavor} Qty: ${froyoOrders[order].count}`,
        );
    }
}

const froyoOrders = generateFroyoOrder();
displayFroyoOrder(froyoOrders);
