function CaesarCipher(str,num) { 
var newStr="";
var val= 0;
//begin looping through the string
for(var i=0; i<str.length; i++){
    
val=str.charCodeAt(i);

if(val >= 65 &&  val<91){
     if(val+num > 90){
        newStr+= String.fromCharCode(64 + (num-(90-val)));
    }
    else
    newStr+= String.fromCharCode(val + num);
   
    
}
else if(val >= 97 &&  val <123 ){
     if(val+num > 122){
        newStr+= String.fromCharCode(96 + (num-(122-val)));
    }
    else
    newStr+= String.fromCharCode(val + num);
    
}
else{
    newStr+= str[i]; 
}

}

return newStr;         
}