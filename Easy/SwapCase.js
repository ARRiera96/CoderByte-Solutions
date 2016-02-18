function SwapCase(str) { 

  var newStr= "";
  
  for(var i= 0; i<str.length; i++){
    if(str.charCodeAt(i)>64 && str.charCodeAt(i)<90 ){
      newStr+= str[i].toLowerCase(); 
      
    }
    else if(str.charCodeAt(i)>96 && str.charCodeAt(i)<123 ){
      newStr+= str[i].toUpperCase(); 
      
    }
    else 
   newStr += str[i]; 
  }
  // code goes here  
  return newStr; 
         
}
   