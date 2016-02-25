function NumberEncoding(str) { 
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var newStr= "";

for(var i=0; i<str.length; i++){
    if(alphabet.indexOf(str[i]) === -1){
        newStr+= str[i];
    }
    else{
        newStr+= alphabet.indexOf(str[i])+1;
    }
    
}
return newStr; 
    
}