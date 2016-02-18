function MeanMode(arr) { 

  
  if( findMean(arr) == findMode(arr) ){
  	return 1;
  }
  else {
    return 0;
      
  }
         
}

//Function that finds mean
var findMean= function(arr){
var sum=0;
  for(var i=0; i<arr.length; i++){
    sum+= arr[i];
    
  }
  
  var mean= sum/arr.length;
  return mean; 
}


//Function that finds mode   
var findMode= function(test){
var countedNums= [];
var numTimes=0;
var mode= "";

for(var i= 0; i<test.length; i++){
    //check to see if ive counted this num already 
    if(countedNums.indexOf(test[i]) != -1){
        continue; 
    }
    else{
        numTimes=0;
        countedNums.push(test[i]);
        for(var j=i; j<test.length; j++){
            if(test[j]===test[i]){
                numTimes++;
            }
        }
        if(i===0 ){
            mode= test[i]+" "+ numTimes;
        }
        
        if(numTimes > Number(mode[mode.length-1]) ){
                mode= test[i]+" "+ numTimes;
            }
        
    }
    
    
    
}
if(mode.length=== 3){
    newMode= mode[0];
}
else{
var newMode= mode.slice(0,3);
    
}
return newMode;  
  

}