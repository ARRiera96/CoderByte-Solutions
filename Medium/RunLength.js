function RunLength(str) { 
  
 var numsRep=0;
  var lstChar= "";
  var newStr="";
  for(var i =0; i<str.length; i++){
      if(str.length===1){
          newStr+= str; 
          break;
      }
    if(i===0){
      lstChar= str[i];
      numsRep++;
      console.log(i +" lstChar is "+lstChar);
     
    }
    else if(i=== str.length-1){
        
      if(str[i]===lstChar){
        numsRep++;
       newStr+= numsRep;
      newStr+= lstChar;}
      else{
          newStr+= numsRep;
      newStr+= lstChar;
        newStr+= "1";
        newStr+=str[i];
      }
     
    
    }
    else{
      if(str[i]===lstChar){
        numsRep++;
        
      }
      else{
      newStr+= numsRep;
        newStr+= lstChar;
        numsRep=1;
        lstChar= str[i]
        console.log(i +" lstChar is "+ lstChar);
      }
    }
  }


        return newStr; 
}
   