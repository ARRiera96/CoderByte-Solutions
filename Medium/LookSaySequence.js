function LookSaySequence(num) { 

 var strNum= num.toString();
var count=0; 
var newStr=""; 
var hasCountedMore= false


for(var i=0; i<strNum.length; i++){
    count=1; 
    console.log(i);
    if(i===strNum.length-1 && i!== 0){
        newStr+= count+ strNum[i];
        break;}
    for(var j=i+1; j<strNum.length; j++){
        if(strNum[j]===strNum[i]){
        count++; 
        hasCountedMore= true; 
         
        }
        else if(strNum[j]!= strNum[i]){
            break;
        }
       
    }
            newStr+= count+strNum[i];
            
            
            if(hasCountedMore){
                i+=1;
                
            }
            console.log(newStr);
}

return newStr;         
}