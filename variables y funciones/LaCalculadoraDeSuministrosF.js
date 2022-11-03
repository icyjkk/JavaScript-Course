var edad = 22;
var edadMax = 99;
var cantidadPorDia = 5.4;

function calculateSupply(edad,cantidad){

  console.log("Necesitarás "+Math.round((edadMax-edad)*cantidad)+" para llegar hasta la edad de "+edadMax);
  
}

calculateSupply(edad,cantidadPorDia);
calculateSupply(28,3);
