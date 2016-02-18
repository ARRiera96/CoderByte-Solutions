function BinaryConverter(str) { 
  var result =0;
  var power= 0; 
  for(var i= str.length-1; i>=0; i--){
    if(str[i] === "1"){
      result+= Math.pow(2, power);
      power++;
    }
    else{
        power++;
      continue;
        
    }
  
  }
  return result; 
         
}