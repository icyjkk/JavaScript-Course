function pluralize(nombre, numero) {
  if ((nombre.substr(-2) == "ss" || nombre.substr(-2) == "ch" || nombre.substr(-2) == "sh" || nombre.substr(-1) == "x") && numero > 1) {
    nombre += "es";
    console.log(numero + " " + nombre);
  } else if (numero == 1) {
    console.log(numero + " " + nombre);
  } else {
    nombre += "s";
    console.log(numero + " " + nombre);
  }
}
pluralize("fox", 5);
pluralize("dress", 2);
pluralize("orange", 5);
pluralize("dress", 1);
pluralize("orange", 1);