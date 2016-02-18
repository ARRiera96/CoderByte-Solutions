function PrimeMover(num) { 
  var primeArr=[2,3];
for(var i=4; i<=10000; i++){
 if(isPrimeNum(i)){
     primeArr.push(i);
  }
  
 }
 
 
  console.log(primeArr[4]);
  return primeArr[num-1];
         
}

var isPrimeNum= function(num){
    var isPrime=false;
  for(var j=2; j< 10000; j++){
      if(num%j !== 0){
          isPrime=true;
          
      }
      else if(num%j === 0 && num != j){
      isPrime=false;
      break;
      }
    
    
    
    
}
    return isPrime;
};
   