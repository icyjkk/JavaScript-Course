
function notBad(value1){

  not=value1.indexOf('not');
  bad=value1.indexOf('bad');

  if (not!=-1 && bad!=-1){
    value1=value1.substring(0,not)+"good"+value1.substring(bad+3,value1.length);
  }

  console.log(value1);

}

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');