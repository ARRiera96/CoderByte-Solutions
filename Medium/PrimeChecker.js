var permArr= [];
var usedChars=[];

function PrimeChecker(num) { 
var hasPrime=false; 

var numStr= num.toString();
var numArr= numStr.split("");
console.log(numArr);
  arrOfPermutations= permute(numArr);

for(var i=0; i<arrOfPermutations.length; i++){
    
     var numJoined= Number(arrOfPermutations[i].join(""));
    if(isPrimeNum(numJoined)){
        hasPrime= true;
        break;
    }
    
    
    
}
console.log(hasPrime);

if(hasPrime){
    return 1;
}
else{
return 0; }


}

var permute = function(input) {
    var i, ch; 
    for( i =0; i<input.length; i++){
        ch= input.splice(i,1)[0];
        usedChars.push(ch);
        if(input.length=== 0){
            permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i,0,ch);
        usedChars.pop();

    }
    return permArr; 
    
    
    
};



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