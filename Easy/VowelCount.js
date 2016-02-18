function VowelCount(str) { 

  var newStr= str.toLowerCase();
  var vowelCount= 0;
  // code goes here 
  for(var i= 0; i< newStr.length; i++){
    if(newStr[i]=== "a" || newStr[i]=== "e" ||newStr[i]=== "i" ||newStr[i]=== "o" ||newStr[i]=== "u" ){
    vowelCount++; 
      
    }
  
  }
  
  return vowelCount; 
         
}
   