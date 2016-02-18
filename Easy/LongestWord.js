function LongestWord(str) { 

  // code goes here  
  
  var newStr= str.replace(/\W/g, ' ')


var newNew= newStr.replace(/\s{2,}/g," "); 

newNew= newNew.split(" ");



//loop through it to find the longest word

var longestWord= newNew[0];

for(var i=1; i<newNew.length; i++){
    
//check to see if longestWord is greater than the current word
    if(longestWord.length > newNew[i].length || longestWord.length === newNew[i].length){
        continue;
    }
    else{
        longestWord= newNew[i];
    }
}
  return longestWord; 
         
}
   