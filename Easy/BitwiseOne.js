function BitwiseOne(strArr) { 

 var newStr= '';
 for(var i= 0; i<strArr[0].length; i++){
     if(strArr[0][i] === '0' && strArr[1][i]=== '0'){
         newStr+= '0';
     }
     else{
     newStr+= '1'; }
     
     
 }
     return newStr;     
} 