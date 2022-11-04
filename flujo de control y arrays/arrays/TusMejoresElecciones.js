var array = ["sushi", "mancuernas", "nike", "yatusabe", "klk","sushi", "mancuernas", "nike", "yatusabe", "klk","sushi", "mancuernas", "nike", "yatusabe", "klk","sushi", "mancuernas", "nike", "yatusabe", "klk","sushi", "mancuernas", "nike", "yatusabe", "klk","sushi", "mancuernas", "nike", "yatusabe", "klk"];





for (var i = 1; i<=array.length; i++) {
  
  if(i==1){
    console.log("My 1st choice is "+array[i-1]);
  }else if(i==2){
    console.log("My 2nd choice is "+array[i-1]);
  }else if(i==3){
    console.log("My 3rd choice is "+array[i-1]);
  }else{
    if(i%10==1 && i>11){
      console.log("My "+i+"st choice is "+array[i-1]);
    }else{
      console.log("My "+i+"th choice is "+array[i-1]);
    }
  }
}