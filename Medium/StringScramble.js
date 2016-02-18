function StringScramble(str1,str2) { 
  var isContained= false;

var indexOf= str1.indexOf("a");
console.log(indexOf);

for(var i=0; i<str1.length; i++){
    for(var j=0; j< str2.length; j++){
        if(str1.indexOf(str2[j]) !== -1){
            isContained= true; 
            
        }
        else{
            isContained= false;
            break;
        }
        
    }
    
    
}
return isContained;

         
}