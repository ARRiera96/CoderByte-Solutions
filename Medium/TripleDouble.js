function TripleDouble(num1,num2) { 
    var counted3=0;
    
    if(straight3s(num1)[1]===true && (straight2s(num1)[1]===true && straight2s(num1)[0]===straight3s(num1)[0] )){
        
return 1;        
        
    }
    else{
        return 0;
        
    }

 
         
}
   
   
   function straight3s(num){
       var lastNum="";
       var count= 0;
       var str= num.toString();
       var arrRes= [];
       
       for(var i=0; i<str.length; i++){
           if(count===3){
               break;
           }
           if(str[i]===lastNum){
               count++;
           }
           else{
               count=0;
               lastNum= str[i];
               count++;
           }
           
           
               
           }
           
       
       if(count===3){
           arrRes.push(lastNum);
           arrRes.push(true);
           return arrRes;
       }
        arrRes.push("");
           arrRes.push(false);
           return arrRes;
   }
   
   function straight2s(num){
             var lastNum="";
       var count= 0;
       var str= num.toString();
       var arrRes= [];
       
       for(var i=0; i<str.length; i++){
           if(count===2){
               break;
           }
           if(str[i]===lastNum){
               count++;
           }
           else{
               count=0;
               lastNum= str[i];
               count++;
           }
           
           
               
           }
           
       
       if(count===2){
           arrRes.push(lastNum);
           arrRes.push(true);
           return arrRes;
       }
       else
       arrRes.push("");
           arrRes.push(false);
           return arrRes;
   }


