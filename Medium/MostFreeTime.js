function MostFreeTime(strArr) { 

  //------------SORTS EVENTS FROM EARLIEST TO LATEST----------------//
var hasBeenSwapped= true; 
var tempVal= ''; 
var finalFormat= ""; 
while(hasBeenSwapped){
    hasBeenSwapped = false; 
    for(var i=0; i<strArr.length-1; i++){

        //case where AM is before PM
        if(strArr[i][5]=== 'P' && strArr[i+1][5]=== 'A'){

            tempVal= strArr[i+1];
            strArr[i+1]= strArr[i];
            strArr[i]= tempVal; 
            hasBeenSwapped= true; 
        }
        //case where both indexes start with an event during PM or both AM  and the first event is later than the second event 
        else if( (strArr[i][0]+strArr[i][1] != '12')&&(strArr[i][5]=== 'P' && strArr[i+1][5]=== 'P' || strArr[i][5]=== 'A' && strArr[i+1][5]=== 'A') && strArr[i].toString(strArr[i][0] + strArr[i][1]) > strArr[i+1].toString(strArr[i+1][0] + strArr[i+1][1])){
            tempVal= strArr[i+1];
            strArr[i+1]= strArr[i];
            strArr[i]= tempVal; 
            hasBeenSwapped= true; 
        }
        //case where both indexes start with an event during PM or both AM and they are both within the same hour 
        //what determines what goes before what are the minutes 
         else if((strArr[i][5]=== 'P' && strArr[i+1][5]=== 'P' || strArr[i][5]=== 'A' && strArr[i+1][5]=== 'A') && strArr[i].toString(strArr[i][3] + strArr[i][4]) > strArr[i+1].toString(strArr[i+1][3] + strArr[i+1][4]) && strArr[i][0]+strArr[i][1] === strArr[i+1][0]+strArr[i+1][1] ){
            tempVal= strArr[i+1];
            strArr[i+1]= strArr[i];
            strArr[i]= tempVal; 
            hasBeenSwapped= true; 
        }

    }
}

//------------END OF SORTING -----------------//



//-----------GETS THE TIME BETWEEN EACH EVENT-------------//
var freeTimeArr= []; 

for(var i= 0; i<strArr.length-1; i++){
    var time= strArr[i].slice(8, strArr[i].length) +"-"+ strArr[i+1].slice(0,7);

var newTime= time.toLowerCase();
//i need to remove any leading zeroes so that it can work with my current minute counting program 
//if index at 0 is 0 remove the 0
if(newTime[0]=== '0'){
    newTime = newTime.slice(1);
}
//if index at 8 is 0 remove the 0 
else if(newTime[8]=== '0'){
    newTime= newTime.slice(0,8) + newTime.slice(9); 
}
 freeTimeArr.push(CountingMinutesI(newTime));

}
var max= greatestFreeTime(freeTimeArr);
 finalFormat= Math.floor(max/60) +":"+max%60;

if(finalFormat.length== 3 && finalFormat[0]=== '0'){
    finalFormat = "0" + finalFormat.slice(0,2) + "0" + finalFormat.slice(2);
}
else if(finalFormat.length== 3 && finalFormat[0] !== '0'){
     finalFormat = "0" + finalFormat.slice(0,2) + "0" + finalFormat.slice(2);
}
else if(finalFormat.length== 4 && finalFormat[0]=== '0'){
    finalFormat= "0"+ finalFormat.slice(0);
}
else if(finalFormat.length== 4 && finalFormat[0] !== '0'){
    finalFormat= "0"+ finalFormat.slice(0);
}
return finalFormat;          
}



//FUNCTION FOR FINDING THE LARGEST NUMBER IN AN ARRAY OF INTEGERS//
function greatestFreeTime(arr){
    var grtst= arr[0]; 
    for(var i= 1; i< arr.length; i++){
        if(grtst< arr[i]){
            grtst= arr[i];
            
        }
    }
    return grtst; 
    
    
}








//FUNCTION FOR FINDING NUMBER OF MINUTES BETWEEN TWO TIMES//


function CountingMinutesI(str) { 
var newStr="";

if(str.length=== 15){
    newStr= str;
    
 
}
else if(str.length===14){
    if(str[7]==="-"){
        newStr= str.slice(0,8)+ "0" + str.slice(8);
        
    }
    else{
        newStr = "0"+ str;
        
    }
    
}
else{
    newStr= "0" + str.slice(0,7)+ "0"+ str.slice(7); 
    
}

var amPeriod= ["01am","02am","03am","04am","05am","06am","07am","08am","09am","10am","11am","12pm"];
var pmPeriod= ["01pm","02pm","03pm","04pm","05pm","06pm","07pm","08pm","09pm","10pm","11pm","12am"];

var dayHr1= newStr[0]+newStr[1]+newStr[5]+newStr[6];
var hrMin1=  Number(newStr[3]+newStr[4]);
var dayHr2= newStr[8]+newStr[9]+newStr[13]+newStr[14];
var hrMin2=  Number(newStr[11]+newStr[12]);


var hrs=0;
 

var containerArr= [];

if(dayHr1==="12am"){
    containerArr= pmPeriod;
}
else if(dayHr1==="12pm"){
    containerArr= amPeriod;
}

else if(dayHr1[dayHr1.length-2 ] === "a"){
    containerArr= amPeriod; 
    
}
else{
    containerArr= pmPeriod; 
}


var count= containerArr.indexOf(dayHr1);

//checks to see if the hours of the day are the same
var dayHrSame= false;
if(dayHr1===dayHr2){
    dayHrSame=true; 
}



while(containerArr[count] != dayHr2 || dayHrSame===true){
    
    if(containerArr[count]===dayHr2){
        dayHrSame=false; 
    }
    
    if(containerArr[count] === "12am"){
        containerArr= amPeriod; 
        count=0;
        hrs++;
        
    }
    else if(containerArr[count] === "12pm"){
        containerArr= pmPeriod;
        count=0;
        hrs++; 
    }
    else{
        
        count++;
        hrs++; 
    }
    
    
    
    
}

//------Figures out how totalMins will be calculated:---------//
//-----------------------------------------------------------//

var totalMins= 0;

if(dayHr1=== dayHr2){
    if(hrMin1>hrMin2){
     totalMins= (hrs*60)- (hrMin1-hrMin2);
    }
    else{
        totalMins= hrMin2-hrMin1;
    }
}
else if(hrMin1=== 0 && hrMin2===0){
    totalMins= hrs*60;
}
else if(hrMin1>hrMin2){
    if(dayHr1[0]===dayHr2[0]){
        totalMins= (hrs*60)-(hrMin1+hrMin2)
    }
    else{
    totalMins= ((hrs-1)*60)+ hrMin1+hrMin2;}
}
else if(hrMin1<hrMin2 || hrMin1===hrMin2){
    totalMins= (hrs*60) +(hrMin2-hrMin1);
    
}
if(dayHr1 < dayHr2 && hrMin1 > hrMin2){
    totalMins= 60-totalMins; 
}
return totalMins;



         
}