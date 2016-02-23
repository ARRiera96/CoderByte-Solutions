function HammingDistance(strArr) { 

  var hamDistance= 0; 
  
  for(var i =0; i<strArr[0].length; i++){
      if(strArr[0][i] != strArr[1][i]){
          hamDistance++; 
      }
      
  }
 
 return hamDistance; 
         
}