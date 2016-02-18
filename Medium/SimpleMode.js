function SimpleMode(arr) { 
var alreadyCounted= [arr[0]];
var prevNumTimes= countNumsRepeated(0,arr);
var mode= arr[0];

for(var i=1; i<arr.length; i++){
    if(alreadyCounted.indexOf(arr[i]) != -1){
        continue;
    }
    else{
       
        alreadyCounted.push(arr[i]);
      if(countNumsRepeated(i, arr)> prevNumTimes){
          prevNumTimes= countNumsRepeated(i, arr); 
          mode=arr[i]; 
          
      }
        
        
    }
    
    
}

if(hasMode(arr)===false){
    return -1;
    
}
else
return mode; 


         
}



function countNumsRepeated(num, arr){
    var numTimesRep= 1;
for(var i= num+1; i<arr.length; i++){
    if(arr[num]===arr[i]){
        numTimesRep++;
    }
    
}    
    return numTimesRep
    
    
}

function hasMode(arr){
    var hasMode= false;
    
    for(var i=0; i<arr.length; i++){
       for(var j= i+1; j<arr.length; j++){
           if(arr[j]===arr[i]){
               hasMode=true;
               break;
               
           }
           
       }
    }
    return hasMode; 
    
    
}