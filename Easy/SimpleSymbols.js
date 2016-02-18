function SimpleSymbols(str) { 
var newStr=false;

for(var i= 0; i < str.length; i++){
    if(str[i].match(/[a-z, A-Z]/) && i> 0){
        
        if(str.charAt(i-1)===  "+" && str.charAt(i+1)===  "+"){
            newStr= true; 
        }
        else{
            newStr=false;
        }
        
    }
        
    
        else if(str[i].match(/[a-z, A-Z]/) && i === 0){
            newStr=false;
            break;
            }
            
       
    
    
}
  // code goes here  
  return newStr; 
         
}