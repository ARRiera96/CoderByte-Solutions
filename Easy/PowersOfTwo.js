function PowersofTwo(num) { 
  var result= num; 
  var isPower= true;
  if(result ===  1){
     isPower= true;
  return isPower;
  }

  else if(result%2 != 0){
    isPower=false;
    return isPower;
  }
  else {
    while(result>1){
      if(result%2 != 0){
        isPower=false;
        break;
      }
      else{
      result = result/2;
        
      }
    
    
    }
    
    return isPower;
  
  
  
  
  }
  
         
}