function LetterCapitalize(str) { 
  
  //Split the string by space and save to new variable
  var newStr= str.split(" ");
  var newNew= "";
  
  //Loop through array and make first letter uppercase
  for(var i = 0; i<newStr.length; i++){
    newStr[i]= newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1); 

  }

	for(var j=0; j<newStr.length; j++){
    newNew += newStr[j] + " ";
    
    }
        
  return newNew; 
         
}