function PalindromeTwo(str) { 

  
var newStr= str.replace(/\W/g, " ");
newStr= newStr.replace(/\s{1,}/g,"" ).toLowerCase();

var revStr= "";
for(var i= newStr.length-1; i>= 0; i--){
    revStr += newStr[i];
    
}

if(revStr=== newStr){
    return true;
    
    
}
else 
return false; 
         
}
   