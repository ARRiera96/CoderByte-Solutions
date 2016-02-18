function MultipleBrackets(str) { 

  var numLeftParen=0,numRightParen=0, numLeftBracket=0, numRightBracket=0;
var numPairs=0; 

for(var i= 0; i<str.length; i++){
    if(str[i]===')'){
        numRightParen++;
    }
    else if(str[i]==='('){
        numLeftParen++;
    }
    else if(str[i]==='['){
        numLeftBracket++;
    }
    else if(str[i]===']'){
        numRightBracket++;
    }
    
    
}

var total= numRightParen+numRightBracket;
if(numRightParen=== numLeftParen && numLeftBracket=== numRightBracket){
   return 1 +" " + total;
}
else
return 0;  
         
}
   