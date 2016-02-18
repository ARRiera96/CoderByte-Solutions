function ArrayAdditionI(arr) { 

  // code goes here  
  var result= 0; 
  var largest = largestNum(arr);
  console.log("largest number: "+largest);
  
 for(var i= 0; i<arr.length; i++){
         result+= arr[i];

     if(result!= largest){
    for(var j= 0; j<arr.length; j++){
      
        if(i != j && arr[j] != largest){
            result+= arr[j]
            if (result=== largest){
                return true; 
                
            }
        }
    }
    for(var k= 0; k<arr.length; k++){
        if(i != k && arr[k] != largest){
            result -= arr[k]; 
            if(result=== largest){
                return true; 
            }
        }
    }
    result= 0; 
    
}}
return false; 
         
}

var largestNum = function(arr){
var largestNum= arr[0]; 
  for(var i= 1; i<arr.length; i++){

    if(largestNum < arr[i])
    {
        largestNum = arr[i]
    }
    else if(largestNum > arr[i])
    {

    continue;
        
    }
    
}
  
  return largestNum; 

}