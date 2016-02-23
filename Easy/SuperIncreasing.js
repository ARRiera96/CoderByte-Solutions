function Superincreasing(arr) { 

var superIncreasing= true; 
var sum= arr[0]; 

for(var i = 1; i<arr.length; i++){
    if(arr[i]>sum){
    sum+= arr[i];
    }
    else{
        superIncreasing= false; 
        break; 
    }
    
}
     
     return superIncreasing;     
}