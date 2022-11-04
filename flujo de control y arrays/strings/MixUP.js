
function mixUp(value1,value2){

  sol1=value1.substring(0,2)+value2.substr(2,value2.length);
  sol2=value2.substring(0,2)+value1.substr(2,value1.length);

  console.log(sol1+" "+sol2);

}

mixUp("Hola","Pepe");
mixUp('mix', 'pod');
mixUp('dog', 'dinner')
