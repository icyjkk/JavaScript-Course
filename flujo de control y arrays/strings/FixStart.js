
function fixStart(value1){

  aux=value1[0];

  for(var i=1;i<value1.length;i++){

    if(value1[i]==value1[0]){
      aux+="*";
    }else{
      aux+=value1[i];
    }
  }
  
  console.log(aux);

}

fixStart("babble");

