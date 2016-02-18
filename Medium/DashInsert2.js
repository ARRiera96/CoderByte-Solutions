function DashInsertII(num) { 

  // code goes here  
  var strNum= num.toString();
  var newStr= "";
  var wasFound= false;
  var symbolsCounted=0;
  
  
   ///Start of For loop
  
  for(var i= 0; i<strNum.length; i++){
      //case where both indexes are Even
      console.log("index: "+ i);
      if(strNum[i+1]===undefined){break;}
      if(strNum[i]==0 || strNum[i+1]==0 ){
          console.log("im zero");
          continue;
          
      }
     
      
      if(isEven(strNum[i]) && isEven(strNum[i+1])){
          console.log("both even");
          if(wasFound===false){
              console.log("first time around");
              newStr= strNum.slice(0,i+1) +"*"+ strNum.slice(i+1);
              console.log(newStr);
              wasFound=true;
              symbolsCounted++;
          }
          else{
              newStr= newStr.slice(0,i+symbolsCounted+1) +"*"+ newStr.slice(i+symbolsCounted+1);
              symbolsCounted++;
              
          }
          
      }
      //case where both indexes are Odd
      else if(isEven(strNum[i])===false && isEven(strNum[i+1]) ===false){
          console.log("both odd");
          
          if(wasFound===false){
               console.log("first time around");
              newStr= strNum.slice(0,i+1) +"-"+ strNum.slice(i+1);
              wasFound=true;
              console.log(newStr);
              symbolsCounted++;
          }
          else{
              newStr= newStr.slice(0,i+symbolsCounted+1) +"-"+ newStr.slice(i+symbolsCounted+1);
              console.log(newStr);
              symbolsCounted++;
              
          }
          
      }
      
      
  }
  ///End of For loop
  if(newStr=== ""){
      newStr= strNum;
  }
  
  
  return newStr; 
         
}


var isEven= function(str){
    
    var num= Number(str);
    var isEven= false;
    if(num%2===0){
        isEven= true;
    }
    
    return isEven;
    
}