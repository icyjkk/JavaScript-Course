
function without(array,num1,num2){

  aux=[];

  for(var i=0 ;i<array.length;i++){
    if(!aux.includes(array[i])){
      aux.push(array[i]);
    }
    
  }

  console.log(aux)

  return array;
  
}

without([1,2,3,4,3,2,5]);
without([5,5,5,5,1,2,3,4,5,5,5,5,5,5,5,5,5]);
without([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);