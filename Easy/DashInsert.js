function DashInsert(str) { 

 var newStr="";
var val1= (Number(str[3])%2);
var val2=(Number(str[4])%2);

    console.log(Number(str[3])%2);


if(val1===0 && val2 ===0){
    console.log("yes theyre odd");
    
}


for(var i=0; i<str.length; i++){
    if((Number(str[i])%2)!==0 && (Number(str[i+1])%2)!==0 && i!== str.length-1){
        
        newStr+= str[i]+ "-";
    }
        
    
    else {
        newStr+= str[i];
    }
    
}




return newStr;         
}