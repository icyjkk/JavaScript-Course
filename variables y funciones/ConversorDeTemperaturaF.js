function celsiusToFahrenheit(celsius){

  CelsiusToFahrenheit = ((celsius/5)*9)+32;
  
  console.log(celsius+"°C es "+CelsiusToFahrenheit+"°F");
}

function fahrenheitToCelsius(fahrenheit){

  FahrenheitToCelsius = ((fahrenheit-32)*5)/9;
  
  console.log(fahrenheit+"°F es "+FahrenheitToCelsius+"°C");
}

celsiusToFahrenheit(22);
fahrenheitToCelsius(170);

