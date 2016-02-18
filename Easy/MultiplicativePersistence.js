function AdditivePersistence(num) { 

 var str= num.toString();
var result= sumOfAllNums(str);
var numAdded=0;
if(str.length> 1){

var numAdded=1;
}

if(result.toString().length === 1){
    return numAdded; 
    
}
else{
    while(result.toString().length !== 1){
       result = sumOfAllNums(result.toString());
        numAdded++;
        
    }
}

return numAdded;         
}



var sumOfAllNums= function(str){
    

    var result= 1;
    for(var i=0; i<str.length; i++){
       result*= Number(str[i]);
        
    }
    
        return result;
    
    
}
   