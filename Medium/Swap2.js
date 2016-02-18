function SwapII(str) { 
    var newStr= "";
    var indexOfNum= 0;
    var lastNum=0;
    var numSaved= false;
    
    
    
    for(var i=0; i<str.length; i++){
        
       
        if(str.charCodeAt(i) >=65 && str.charCodeAt(i) < 91   ){
            
            //its uppercase, convert to lowercase
            newStr+= str[i].toLowerCase();
            
        }
        else if( str.charCodeAt(i) >=97 && str.charCodeAt(i) < 173 ){
            
             newStr+= str[i].toUpperCase();
            
        }
        else if( str.charCodeAt(i) ===32){
             numSaved= false;
            newStr+= str[i];
        }
        
        else if(str.charCodeAt(i) >=48 && str.charCodeAt(i) < 58){
            if(numSaved===true){
                newStr= newStr.replace(str[str.indexOf(lastNum)], str[i]);
                newStr+= lastNum; 
                lastNum= 0;
                
                
            }
            else{
            lastNum= str[i]; 
             newStr+= lastNum;
             numSaved= true;
            
            }
        }
        else
        newStr+= str[i];
    }
    
return newStr;

         
}