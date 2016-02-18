function ABCheck(str) { 

  // code goes here  
  
var isValid= true; 

for(var i= 0; i<str.length; i++){
    if(str.charAt(i) === "a"){
        if(str[i+4] === "b"){
            isValid = true; 
            break; 
        }
        else{
            isValid=false;

            continue;
            
        }
    }
    else
     isValid=false;

    continue; 
    
}

  return isValid; 
         
}