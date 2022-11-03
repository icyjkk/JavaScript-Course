function greaterNum(num, num1) {

  if (num < num1) {
    console.log("El número mayor entre " + num + " y " + num1 + " es " + num1);
  }else if (num>num1){
    console.log("El número mayor entre " + num + " y " + num1 + " es " + num);
  }else{
    console.log("Los numeros son iguales");
  }

}


greaterNum(22, 23);
greaterNum(24, 23);
greaterNum(24, 24);


