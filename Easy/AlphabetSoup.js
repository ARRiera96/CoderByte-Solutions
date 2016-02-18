function AlphabetSoup(str) { 

  // code goes here 
  var inOrder= false; 
  var isSwapped; 
  var tempChar; 
  var count=0;
  var replaceAt= function(index, curChar, nextChar){
      var newStr= str.substr(0, index) + nextChar + curChar + str.substr(index+2);
      return newStr;
  }; 
  
    while(inOrder === false){
        
    	if(count === str.length-1 && isSwapped=== false){
        inOrder = true; 
        }
        else if(count === str.length-1 && isSwapped=== true){
            count=0;
            isSwapped=false;
        }
     	else if(str.charCodeAt(count) < str.charCodeAt(count+1)){
          count++;       
        }
        else if(str.charCodeAt(count) > str.charCodeAt(count+1)){
        	str= replaceAt(count, str[count], str[count+1]);
           isSwapped= true; 
           count++;
        }
        else if(str.charCodeAt(count) === str.charCodeAt(count+1)){
            count++; 
        }
    
  
    
  }
        
    return str; 

}
   