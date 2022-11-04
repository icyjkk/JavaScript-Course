
var receta=[
  {titulo:"Mole",autor:"Juan Carlos El pera",leido:false},
  {titulo:"HarryPotter",autor:"Pedro Sanchez",leido:true}
];


for(var i=0;i<receta.length;i++){

  f=receta[i].titulo+" por "+receta[i].autor;
  if(receta[i].leido){
    f="[Leido] "+f;
  }else{
    f="[Pendiente de leer] "+f;
  }
  console.log(f);
}