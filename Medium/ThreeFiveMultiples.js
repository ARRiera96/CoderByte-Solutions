function ThreeFiveMultiples(num) { 


var multiples3= [3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99];
 var multiples5= [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
 var mulArr= [];
 for(var i=0; i<num; i++){
     
     if(multiples3.indexOf(i) != -1){
         mulArr.push(i);
         
     }
     if(multiples5.indexOf(i) != -1){
         mulArr.push(i);
     }
     
     
     
 }
 var total= 0;
 for(var i= 0; i<mulArr.length; i++){
     total+= mulArr[i];
     
 }
return total;  
         
}