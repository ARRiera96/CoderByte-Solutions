function OffLineMinimum(strArr) { 
  var newArr= strArr; 
var containerArr= [];
var minNums=[];
var lowestNum= 0;
var newMinNums="";

   for(var i=0; i<newArr.length; i++){
        //Case where current i is E and i+1 is also E
        if( newArr[i]=== "E" && newArr[i-1]=== "69" ){
            console.log("im in here");
            containerArr= strToNum(newArr).splice(0, i);
            minNums.push(newMin(containerArr));
            containerArr=[];
            
        }
        //Case where just i is E
        else if(newArr[i]==="E"){
            lowestNum= newMin(containerArr);
            console.log("lowestNum "+lowestNum);
            newArr.splice(strToNum(newArr).indexOf(lowestNum),1);
            newArr.splice(strArr.indexOf("E"),1,"69");
            console.log(newArr);
            minNums.push(newMin(containerArr));
            containerArr= [];
            i--;

            
        }
        //case where its a regular number
        else{
                        console.log(newArr[i]);

            containerArr.push(Number(newArr[i]));
            console.log(containerArr);
            
        }
        
        
    }
    newMinNums= minNums.join();
    return newMinNums;
         
}


   var strToNum= function(arr){
        var newArr= [];
        for(var i=0; i<arr.length; i++){
            if(arr[i]==="E"){
               newArr.push(69);
            }
            else{
             newArr.push(Number(arr[i]));
                
            }
            
            
            
        }
        return newArr; 
        
    }
    
    var newMin= function(arr){
        var lowestNum=arr[0];
        for(var i= 0; i<arr.length; i++){
            if(arr[i]<lowestNum){
                lowestNum= arr[i];
                
            }
            
        }
        
        return lowestNum;
        
        
        
        
    }