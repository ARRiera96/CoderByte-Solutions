function LetterChanges(str) {



    var newStr = '';
    var newChar = '';


    for (var i = 0; i < str.length; i++) {


//check to see if the char is a number or not
        if (isNaN(str[i]) && isNotOperator(str[i] )) {

          //Saves the next letter in the alphabet to newChar
            newChar = String.fromCharCode(1 + str.charCodeAt(i));

          //check if newChar is a vowel or not

                if (isVowel(newChar) ) {
                    newStr += newChar.toUpperCase();
                } 
              else
                    newStr += newChar;
                    newChar='';


            }
        
      else {
            newStr += str[i];

        }
        
    }
//end of number check



    
    // code goes here  
    return newStr;

}


var isVowel= function(newChar){
       var vowels = ["a", "e", "i", "o", "u"];
  
            for (var i = 0; i < vowels.length; i++) {
              
              if(newChar.toLowerCase() != vowels[i] ){
              continue;
              }
              else if(newChar.toLowerCase() === vowels[i] ){
                return true;
              }
              if(i === vowels.length-1){
                return false; 
                break;
              }
	
              
              
            }
  
}


var isNotOperator= function (newChar){

   if(newChar != "!" && newChar != "+" && newChar != "-" && newChar != "*" && newChar != "/" && newChar != "." && newChar != "," && newChar != "\""  )
   {
   return true;
   }
  else
    return false




}