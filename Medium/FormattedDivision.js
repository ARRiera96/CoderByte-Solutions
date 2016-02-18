function FormattedDivision(num1,num2) { 

 var num= num1/num2;
var str= num.toString();
var decOfStr= str.slice(str.indexOf("."));
var newStr= "";
var finalStr= "";

if(str.indexOf(".") != -1){
    newStr= str.slice(0,str.indexOf("."))
}
else{
    newStr= str;
}



console.log(newStr);
if(newStr.length<4){
    finalStr= newStr;
    
}

else if(newStr.length===4){
    finalStr= newStr.slice(0,1) + newStr.slice(1);
}
else if(newStr.length===5){
    finalStr= newStr.slice(0,2) + "," + newStr.slice(2); 
    
}
else if(newStr.length===6){
    finalStr= newStr.slice(0,3) + "," + newStr.slice(3) ;
}
else if(newStr.length===7 || newStr.length===8 || newStr.length===9){
    finalStr= newStr.slice(0,1) + "," + newStr.slice(1,4) + "," + newStr.slice(4) ;
    
}
else if(newStr.length===10 || newStr.length===11 ||  newStr.length===12){
    finalStr= newStr.slice(0,1) + "," + newStr.slice(1,4) + "," + newStr.slice(4,7) +"," + newStr.slice(7);
    
}

if(str.indexOf(".") != -1){
    finalStr+= decOfStr;
}
else{
   finalStr += ".0000"
}



return finalStr; 

}