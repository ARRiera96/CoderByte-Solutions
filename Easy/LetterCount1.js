function LetterCountI(str) { 
  
  //Split the word by space
  var newStr= str.split(" ");
  var greatstWord= "";
  var hasRepeated= false; 
  //Start for loop
  for(var i= 0; i<newStr.length; i++){
  	if(i=== 0){
      greatstWord=newStr[i];
      if(lettersRepeated(newStr[i])>0){
        hasRepeated= true; 
      }
    }
    else{
      if(lettersRepeated(newStr[i])> lettersRepeated(greatstWord)){
      	greatstWord= newStr[i]; 
      }
       if(lettersRepeated(newStr[i]) > 0){
        hasRepeated= true; 
      }
    
    
    
    }
  
  }
  
  
  
  if(hasRepeated){
      return greatstWord; 
  }
  else{
      return -1
  }
  

         
}

var lettersRepeated = function(word){
var numRepeated= 0; 
  for(var i=0; i<word.length; i++){
    for(var j= i+1; j<word.length; j++){
      if(word[i]===word[j]){
      numRepeated++;
      }
      else{
        continue; 
      }
      
    }
  
  
  }
return numRepeated; 

}