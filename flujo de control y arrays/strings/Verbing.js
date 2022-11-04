
function verbing(value1){

 
  if(value1.length>=3){
    if(value1.substr(-3)=="ing"){
      value1+="ly";
    }else{
      value1+="ing";
    }
    
  }
  
  console.log(value1);

}

verbing("swim");
verbing("swimming");
verbing("go");