
function without(array,num1,num2){

  aux=[];

  for(var i=0 ;i<array.length;i++){
    if(array[i]!=num1 && array[i]!=num2){
      aux.push(array[i]);
    }
    
  }

  console.log(aux)

  return array;
  
}

without([1,2,3,4,5],2,4);
without([1,2,3,4,5],2,4);
