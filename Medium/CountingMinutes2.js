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
return totalMins;



         
}
   