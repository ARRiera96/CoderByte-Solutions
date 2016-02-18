function LetterCount(str) { 
    //splitting string by space
    var newStr= str.split(" "); 
    var numRepeatedLets= 0;
    
    var greatestWord= "";
    for(var i= 0; i<newStr.length; i++){
        if(numRepeatedLetters(newStr[i]) > numRepeatedLets){
            numRepeatedLets= numRepeatedLetters(newStr[i]); 
            greatestWord = newStr[i]; 
        }
        
        
    }
    if(numRepeatedLets=== 0){
        return -1
    }
    else
    return greatestWord;


         
}

function numRepeatedLetters(str){
    var  numRepeat=0;
    
    for(var i =0; i< str.length; i++){
        for(var j=i; j<str.length; j++){
            if(i ===j){
                continue;
            }
            
            if(str[i]===str[j]){
                numRepeat++;
                
            }
   
        }
   
    }
    
    return numRepeat; 
    
    
}







LetterCount(readline());           
