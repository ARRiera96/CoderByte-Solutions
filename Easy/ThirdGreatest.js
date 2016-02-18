function ThirdGreatest(strArr) { 
  
  var newArr= [];
  var newArr2= [];
  var thirdGrt= 0;
  var thirdWord= "";
  //stores the length of each word in an array in order
  
  for(var i=0; i<strArr.length; i++){
    newArr.push(strArr[i].length);
  }
  console.log(newArr);

  //here we save a sorted version of the previous array in another array
  newArr2= newArr.sort(function (a,b){return a-b;});
  console.log(newArr2);
  
  //here we get the third largest number
  thirdGrt= newArr[newArr2.length-3];
  
  console.log(thirdGrt);
  
  //here we loop the array to find the last occurence of the word with the thirdGtst length
  for(var j=0; j<strArr.length; j++){
    if(strArr[j].length === thirdGrt){
      thirdWord= strArr[j]; 
    }
  
  }
  
  
  
  return thirdWord; 
         
}