function toFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius.toFixed(2) + "°C is " + fahrenheit.toFixed(2) + "°F");
}
function toCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(fahrenheit.toFixed(2) + "°F is " + celsius.toFixed(2) + "°C");
}

toFahrenheit(37);
toCelsius(130);

console.log(); // for a line-break

toFahrenheit(46.8492);
toCelsius(130.2568);