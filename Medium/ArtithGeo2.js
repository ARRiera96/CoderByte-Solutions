function ArithGeoII(arr) { 
  
  if(isArithmetic(arr)){
  return "Arithmetic";
  }
  else if(isGeometric(arr)){
    return "Geometric";
  }
  else{
    return -1;
  }

 
         
}
function isArithmetic(arr){
    var diff=arr[1] -arr[0];
    var isArith=false;
    for(var i=2; i<arr.length; i++){
        if(arr[i]-arr[i-1] === diff){
            isArith= true;
        }
        else{
            isArith= false;
            break;
        }
    }
    return isArith; 
    
    
    
}

function isGeometric(arr){
    var quotient= arr[1]/arr[0]; 
    var isGeo= false;
    for(var i= 2; i<arr.length; i++){
                if(arr[i]/arr[i-1] === quotient){
            isGeo= true;
        }
        else{
            isGeo= false;
            break;
        }
        
    }
    return isGeo;
    
}
   