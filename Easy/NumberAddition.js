function NumberAddition(str) { 
	var result=0;
	

  for(var i=0; i<str.length; i++){
      if(str.charCodeAt(i) != 32 && str.charCodeAt(i+2) != 32 && str.charCodeAt(i+3) != 32 && isNaN(str[i]) === false && isNaN(str[i+1])=== false && isNaN(str[i+2])=== false ){
      result += Number(str[i] + str[i+1]+ str[i+2]);
      i+=2;

    }
    else if(str.charCodeAt(i) != 32 && str.charCodeAt(i+2) != 32 && isNaN(str[i]) === false && isNaN(str[i+1])=== false ){
      result += Number(str[i] + str[i+1]);
      i++;

    }
    else if(str.charCodeAt(i) != 32 && isNaN(str[i]) === false ){
      result += Number(str[i]);
    }
    else
      continue;
    
  }
  // code goes here  
  return result; 
         
}