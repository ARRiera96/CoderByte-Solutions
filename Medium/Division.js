function Division(num1,num2) { 

var GCF= 0;

for(var i=1; i<1001; i++){
    if(num1 % i === 0 && num2 % i === 0 ){
        GCF= i; 
        
    }
    
     
    
}
 return GCF;
  
         
}
   