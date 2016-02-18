function Palindrome(str) { 

 str =str.split(" ").join("");
var newStr ="";

for(var i= str.length-1; i >=0; i-- ){
    
    newStr+= str[i]; 

  }
  
if(newStr===str){
    return true
}   
else{
    return false; 
}
         
}