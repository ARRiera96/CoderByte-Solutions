function StockPicker(arr) { 

  var profits=[];
  
  for(var i=0; i< arr.length; i++){
      for(var j=i+1; j< arr.length; j++){
          if(arr[i]<arr[j]){
              profits.push(arr[j]-arr[i]);
              
          }
          
          
      }
  }
    if(profits[0]===undefined){
        return -1; 
    }

  
  var max= profits[0]; 
  for(var h=1; h<profits.length; h++){
      if(profits[h]>max ){
          max= profits[h];
      }
     
  }
  return max; 
         
}