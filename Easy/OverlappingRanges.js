function createArrFromRange(num1,num2){
    var arr= [];
    for(var i=num1; i<=num2; i++){
        arr.push(i);
    }
    return arr;
    
}



function OverlappingRanges(arr) { 
    
    //creates both arrays with numbers between both ranges
    
    var numArr1= createArrFromRange(arr[0],arr[1]);
    var numArr2= createArrFromRange(arr[2],arr[3]);
    var numOverlapped= 0;
    var minNumOverlap= arr[4];
    
    for(var i=0; i<numArr1.length; i++){
        for(var j=0; j<numArr1.length; j++){
            if(numArr1[i]===numArr2[j]){
                numOverlapped++;
                
            }
            
        }
        
    }
    if(numOverlapped >= minNumOverlap ){
        return true;
        
    }
    else 
    return false;
    


         
}