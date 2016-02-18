var hasPermutation = function(str) {
    var hasPermu= false;
    for(var i=1; i< str.length; i++){
        if(Number(str[i])> Number(str[0])){
            hasPermu= true; 
        }
        
    }
    return hasPermu; 
    
}

var areAllFound= function(str1, str2){
    var areAllFound= false; 
    
    for(var i= 0; i<str1.length; i++){
        if(areAllFound === false && i !== 0 ){
            break;
        }
        for(var j=0; j<str2.length; j++){
            if(str1[i]===str2[j]){
                areAllFound= true;
                str2= str2.replace(str1[i], "");
                break;
            }
            else{
                
            areAllFound=false;
            }
        }
        
    }
    return areAllFound;
    
    
    
}

function PermutationStep(num) { 

 var str= num.toString();
 var strPermu= 0; 
 num +=1; 
 var curNum= num.toString();

 var permutationFound=false;
 
if(hasPermutation(str) === false){
    return -1; 
}
else{
    while(permutationFound === false){
        if( areAllFound(str , curNum)){
            strPermu= curNum
            permutationFound= true; 
        }
        else{
            var newNum= Number(curNum)+1;
            curNum = newNum.toString();
       
        }
   
    }
   
    }
    return strPermu; 
  
}