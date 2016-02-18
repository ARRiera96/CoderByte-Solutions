function StringReduction(str) { 
var newStr= "";
var reducible= true; 

var curPair= '';
var reducedLetter="";
var tempVal= "";
var tempStr= "";
  while(reducible){
    reducible= false;
    for(var i= 0; i<str.length; i++){
        
        //case where the last letter in the new string and the current index in the original string match one of the three cases//
        if (reductionLetter(newStr[newStr.length-1]+str[i])[0] !== false && reductionLetter(newStr[newStr.length-1]+str[i])[0] !== true ){
            tempVal= reductionLetter(newStr[newStr.length-1]+str[i])[0];
            tempStr= newStr.slice(0,newStr.length-1) + tempVal;
            newStr= tempStr; 
            reducible= true;
            
        }
        else if(newStr[newStr.length-1]===str[i] && i===str.length-1){
            newStr+= str[i];
        }
        
        else {
            //case where the current index in the original string and the next index match one of the three cases//
            
            if(reductionLetter(str[i]+str[i+1])[0] !== false && reductionLetter(str[i]+str[i+1])[0] !== true ){
                tempVal= reductionLetter(str[i]+str[i+1])[0];
                newStr+= tempVal; 
                i++; 
                reducible= true;
                
           
                
                
                
            }
            //case where the current index in the original string and the next index dont match any of the cases and are the same
            else{
                newStr+= str[i]+str[i+1];
                i++;
                reducible= true;
                
            }
            
            
        }
    
    }
    str= newStr; 
    newStr='';
var allSame= false;
var temp= str[0];
 for(var i=1; i<str.length; i++){
     
        if(str[i] === temp){
            temp=str[i];
            allSame= true;
            
        }
        else{
            break;
        }
    }
    if(allSame || str.length===1){reducible= false;}
  
    
}

return str.length;         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down

var reductionLetter= function(ch) {
    var arr = [];
    
    if(ch === 'ab' || ch==='ba'){
        arr.push("c",true);
    return arr;
        
    }
    else if(ch === 'cb' || ch==='bc'){
         arr.push("a",true);
    return arr;
        
    }
    else if(ch === 'ac' || ch==='ca'){
         arr.push("b",true);
    return arr;
        
    }
    else{
        arr.push(false);
        return arr;
    }

}