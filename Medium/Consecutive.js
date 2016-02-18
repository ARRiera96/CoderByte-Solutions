function Consecutive(arr) { 

  var numCounter= 0; 
var numArr= arr.sort(function(a,b){return a-b})
for(var i=1; i<numArr.length; i++){
    numCounter+= (numArr[i]-numArr[i-1])-1; 
    
    
}

return numCounter;         
}
   