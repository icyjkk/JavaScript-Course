function helloWorld(idioma) {

  switch (idioma) {
    case "es":
      console.log("Hola Mundo");
      break;
    case "cz":
      console.log("Ahoj světe")
      break;
    default:
      console.log("Hello World");
  }

}


helloWorld();
helloWorld("es");
helloWorld("cz");

