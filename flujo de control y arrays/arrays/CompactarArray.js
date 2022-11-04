
function compact(array){

  aux=[];

  for(var i=0 ;i<array.length;i++){
    if(array[i]){
      aux.push(array[i]);
    }
    
  }

  console.log(aux)

  return array;
  
}

compact([2,3,4,0,5,false,6,7,8]);
compact([1,3,false,4,5,0]);
