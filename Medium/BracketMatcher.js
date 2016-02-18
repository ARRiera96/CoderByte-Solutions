function BracketMatcher(str) { 

 var rightParen=0;
 var leftParen=0;
  for(var i=0; i<str.length; i++){
    if(str[i]==="("){
      leftParen++;
    }
    else if(str[i]===")"){
    rightParen++;
    }
      
  }
  if(rightParen === leftParen){
  return 1;}
  else
    return 0;
         
}