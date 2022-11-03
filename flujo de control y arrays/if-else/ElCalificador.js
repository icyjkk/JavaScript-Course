function assignGrade(nota) {

  if (nota>=0 && nota <60) {
    console.log("Tienes una nota de " + nota + " por lo que tu grado es de F");
  } else if (nota >= 60 && nota < 70) {
    console.log("Tienes una nota de " + nota + " por lo que tu grado es de D");
  } else if (nota >= 70 && nota < 80) {
    console.log("Tienes una nota de " + nota + " por lo que tu grado es de C");
  } else if (nota >= 80 && nota < 90) {
    console.log("Tienes una nota de " + nota + " por lo que tu grado es de B");
  } else if (nota >= 90 && nota <= 100)  {
    console.log("Tienes una nota de " + nota + " por lo que tu grado es de A");
  } else{
    console.log("Error, introduzca un valor entre 0-100");
  }

}


assignGrade(100);
assignGrade(90);
assignGrade(80);
assignGrade(70);
assignGrade(60);
assignGrade(50);
assignGrade(40);
assignGrade(30);
assignGrade(20);
assignGrade(10);
assignGrade(0);
