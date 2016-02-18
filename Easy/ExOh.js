function ExOh(str) { 

  // initialize variables
  var eqAmounts= false; 
  var numX= 0; 
  var numO= 0; 
  
  	for(var i =0; i<str.length; i++){
      if(i === str.length-1){
        if(str[i]==="x"){
        numX++;
        }
        else{
        numO++;
        }
        if(numX === numO){
          eqAmounts= true; 
        }
        else{
         eqAmounts= false; 
        }
      }
      else{
      if(str[i]==="x"){
        numX++;
        }
        else{
        numO++;
        }
      
      }
  	}
  
  
  return eqAmounts; 
         
}