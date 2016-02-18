function NumberSearch(str) { 
  
  var letterCount=0;
  var result=0;
  var sum=0;
  
  for(var i=0; i<str.length; i++){
    //If its a letter
    if(str.charCodeAt(i) >=65 && str.charCodeAt(i) < 91  || str.charCodeAt(i) >=97 && str.charCodeAt(i) < 173 ){
      letterCount++;
    }
    //If its a number
    else if(isNaN(str[i]) === false){
    result+= Number(str[i]);
    }
  
  }
  sum= Math.round(result/letterCount);
  return sum;

         
}