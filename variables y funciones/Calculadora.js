function squareNumber(num) {
  sol= num*num;
  console.log("El cuadrado de "+num+" es "+sol);
  return sol;
}

function halfNumber(num){
  sol= num/2;
  console.log("La mitad de "+num+" es "+sol);
  return sol;
}

function percentOf(num1,num2){
  sol=(num1*100)/num2;
  console.log(num1+" es el "+sol+"% de "+num2);
  return sol;
}

function areaOfCircle(radio){
  sol=3.14*squareNumber(radio);
  console.log("El área para un círculo con radio "+radio+" is "+parseFloat(sol).toFixed(2))
  return sol;
}

function all(num){

  mitad=halfNumber(num);
  cuadrado=squareNumber(mitad);
  area=areaOfCircle(cuadrado);
  per=percentOf(cuadrado,area);
  
}

squareNumber(3);
console.log("----------------")
halfNumber(5);
console.log("----------------")
percentOf(3,4);
console.log("----------------")
areaOfCircle(2.3);
console.log("----------------")
all(4);

