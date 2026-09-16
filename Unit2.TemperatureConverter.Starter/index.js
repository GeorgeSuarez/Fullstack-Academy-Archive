// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  let fahrenInt = parseInt(fahren);
  return (fahrenInt - 32) * 5 / 9;
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  if (fahren <= 32) {
    return `temperature is ${fahren}°F and ${celc}°C and feels very cold`;
  } else if (fahren <= 64) {
    return `temperature is ${fahren}°F and ${celc}°C and feels cold`;
  } else if (fahren <= 86) {
    return `temperature is ${fahren}°F and ${celc}°C and feels warm`;
  } else if (fahren >= 100) {
    return `temperature is ${fahren}°F and ${celc}°C and feels hot`;
  }
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.round(Math.random() * limit);
}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
