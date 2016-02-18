function SecondGreatLow(arr) { 

  // code goes here  
var newArr= arr.sort(function(a,b){ return a-b;}); 
    var lowestNum= newArr[0]; 
 var greatestNum= newArr[newArr.length-1]; 
 
  if(arr.length===2){
    return newArr[1] + " " + newArr[0]; 
  }
  else{
    
    return  secondLowNum(newArr, lowestNum) +" " + secondGreatestNum(newArr, greatestNum)  ; 
  }
 
}


var secondLowNum = function(arr, lowestNum) {
var secondLowestNum= 0; 
for(var i= 0; i<arr.length; i++){
    if(arr[i] != lowestNum ){
        if(secondLowestNum=== 0){
        secondLowestNum=arr[i];
         }
        if(arr[i]<secondLowestNum){
            secondLowestNum= arr[i]; 
        }
        
        
        
    }
    
    
}
return secondLowestNum; 
};

var secondGreatestNum = function(arr, greatestNum) {
var secondGreatestNum= 0; 
for(var i= 0; i<arr.length; i++){
    if(arr[i] != greatestNum ){
        if(secondGreatestNum=== 0){
        secondGreatestNum=arr[i];
         }
        if(arr[i]>secondGreatestNum){
            secondGreatestNum= arr[i]; 
        }
        
        
        
    }
    
    
}
return secondGreatestNum; 
};
   