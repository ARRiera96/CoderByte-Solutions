function CheckNums(num1,num2) { 
  
  var isGreater= "";
  
  if(num1 < num2){
    isGreater= "true"; 
  }
  else if (num1 === num2){
    isGreater= "-1";
  }
  else{
   isGreater= "false"; 
  }
    
  return isGreater; 
         
}