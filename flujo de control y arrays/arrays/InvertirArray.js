
function mireverse(array){

  var aux=[];

  for(var i=array.length-1;i>=0;i--){
    aux.push(array[i]);
  }

  console.log(aux);

  return aux;
  
}

mireverse([2,3,4,5,6,7,8]);
mireverse([1,2,3]);
