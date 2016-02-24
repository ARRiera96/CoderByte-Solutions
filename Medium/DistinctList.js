function DistinctList(arr) { 

var duplicates =0;

 for(var i= 0; i<arr.length; i++){
     for(var j=i+1; j<arr.length; j++){
         var originalI= arr[i];
         if(arr[i]===arr[j]){
             duplicates++;
             i++;
             
         }
     
     }
 
 }
 return duplicates; 
         
}