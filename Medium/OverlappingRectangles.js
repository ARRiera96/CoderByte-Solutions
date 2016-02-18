//Driver Function//
function OverlappingRectangles(strArr) { 
    
//Here I save my two rectangles in 2 different variables

var twoCoordsArr= splitArr(removeCommasBetweenCoords(strArr));
var rec1= twoCoordsArr[0]; 
var rec2 = twoCoordsArr[1]; 
console.log("Left rec: " +  rec1 +  "\nRight rec: " + rec2);

// Saves the bottom left and top right points of each rectangle 

var rec1BLeft= bottomLeftPoints(rec1); 
var rec1TopRight= topRightPoints(rec1); 
var rec2BLeft= bottomLeftPoints(rec2); 
var rec2TopRight= topRightPoints(rec2); 

var rec1BlNum= rec1BLeft.match(/-?\d*\.{0,1}\d+/g); 
var rec1TrNum= rec1TopRight.match(/-?\d*\.{0,1}\d+/g);
var rec2BlNum= rec2BLeft.match(/-?\d*\.{0,1}\d+/g); 
var rec2TrNum = rec2TopRight.match(/-?\d*\.{0,1}\d+/g);

console.log(rec1BLeft+" " + rec1TopRight+ rec2BLeft +" " + rec2TopRight);
var newTestArr= overlappingRec(rec1BLeft,rec1BlNum, rec1TopRight,rec1TrNum, rec2BLeft,rec2BlNum, rec2TopRight,rec2TrNum);
console.log(newTestArr + "hgfhk");

if(newTestArr[2]===false){
    return 0; 
}
//Save the coordinate of the overlapping rectangles and find the remaining 2 coordinates

var overlappingRecBLeft= newTestArr[0];
var overlappingRecTRight= newTestArr[1];

var overlappingRecBlNum= overlappingRecBLeft.match(/-?\d*\.{0,1}\d+/g); 
var overlappingRecTrNum= overlappingRecTRight.match(/-?\d*\.{0,1}\d+/g);
 


var yDiff= Math.abs(overlappingRecTrNum[1]-overlappingRecBlNum[1]);
console.log(yDiff);
var overlappingRecTLeft= "("+ overlappingRecBlNum[0]+ "," + (Number(overlappingRecBlNum[1])+yDiff)+")";
var overlappingRecBRight= "("+overlappingRecTrNum[0]+","+Number(overlappingRecTrNum[1]-yDiff)+")";
var overLappingRec= [overlappingRecBLeft,overlappingRecTRight, overlappingRecTLeft,overlappingRecBRight] ;
console.log("Problem here** "+ overlappingRecTLeft);
console.log(overLappingRec +"kk");

var myFinalArea= recArea(rec1)/recArea(overLappingRec);
console.log(recArea(overLappingRec)+"jjj" );
return Math.round(myFinalArea);

         
}




//FUNCTION THAT SPLITS THE STRING WITH THE COORDINATES IN 2
function splitArr(arr){

var half_length = Math.ceil(arr.length / 2);    

var leftSide = arr.slice(0,half_length);
var rightSide= arr.slice(half_length);

var twoCoords=[];
twoCoords.push(leftSide,rightSide);  

return twoCoords; 
}

//FUNCTION THAT REMOVES ALL COMMAS INBETWEEN COORDINATES AND RETURNS A STRING WITH ALL THE COORDINATES SEPERATED BY SPACE 
function removeCommasBetweenCoords(arr){
    var newArr= arr[0].replace(/,(?=\()/g," ");
newArr= newArr.split(" ");
return newArr; 
    
    
}

//FUNCTION THAT WILL IDENTIFY A RECTANGLES BOTTOM LEFT POINT 
function bottomLeftPoints(arr){
    var testArr=[];
    
var x=0;
if(arr[0][1]==="-"){
    x= "-"+ arr[0][2];
}
else{
    x=arr[0][1];
}

var y=0;
if(arr[0][arr[0].length-3]==="-"){
    y= "-"+arr[0][arr[0].length-2];
}
else{
y=arr[0][3];
}

for(var i= 1; i<arr.length; i++){
    testArr= arr[i].match(/-?\d*\.{0,1}\d+/g);
    if(  x>= testArr[0] && y>testArr[1] || x> testArr[0]  && y>= testArr[1] ){
        x= testArr[0] ;
        y= testArr[1] ;
        
    }
    

}

return "("+x+","+y+")"; 

}

//FUNCTION THAT WILL IDENTIFY A RECTANGLES TOP RIGHT POINT

function topRightPoints(arr){
    
var testArr=[];
    
var x=0;
if(arr[0][1]==="-"){
    x= "-"+ arr[0][2];
}
else{
    x=arr[0][1];
}

var y=0;
if(arr[0][arr[0].length-3]==="-"){
    y= "-"+arr[0][arr[0].length-2];
}
else{
y=arr[0][3];
}

for(var i= 1; i<arr.length; i++){
    testArr= arr[i].match(/-?\d*\.{0,1}\d+/g);
    if(  x<= testArr[0] && y<testArr[1] || x< testArr[0]  && y<= testArr[1] ){
        x= testArr[0] ;
        y= testArr[1] ;
        
    }
    

}

return "("+x+","+y+")"; 

}

//Function that will calculate the bottomRight and topRight points of the overlapping rectangle
function overlappingRec(rec1BLeft, rec1BlNum, rec1TRight,rec1TrNum, rec2BLeft,rec2BlNum, rec2TRight,rec2TrNum){
    var x1,x2,x3,x4,x5,x6,y1,y2,y3,y4,y5,y6; 
   
   var doesOverlap= true; 
    x1= rec1BlNum[0]; 
    y1= rec1BlNum[1];
    x2= rec1TrNum[0];
    y2= rec1TrNum[1];
    x3= rec2BlNum[0];
    y3= rec2BlNum[1];
    x4= rec2TrNum[0];
    y4= rec2TrNum[1];

    x5 = Math.max(x1, x3);
    y5 = Math.max(y1, y3);
    x6 = Math.min(x2, x4);
    y6 = Math.min(y2, y4);
    var newBottomLeft= "("+x5+","+y5+")";
    var newTopRight= "("+x6+","+y6+")";
    if(x5 >= x6|| y5 >= y6){
        doesOverlap= false; 
    }
    var arrCoords= [newBottomLeft, newTopRight,doesOverlap]; 
    
    return arrCoords; 
    
    
}

//FUNCTION TO FIND THE AREA OF THE RECTANGLE GIVEN THE COORDINATES

function recArea(arr){
var x1,x2,y1,y2,side1,side2=0;



x1= arr[0].match(/-?\d*\.{0,1}\d+/g)[0];
y1= arr[0].match(/-?\d*\.{0,1}\d+/g)[1];
for(var i=1; i<arr.length; i++){
    if(arr[i].match(/-?\d*\.{0,1}\d+/g)[0] != x1){
        x2= arr[i].match(/-?\d*\.{0,1}\d+/g)[0];
        break; 
    }
    
}
for(var j=1; j<arr.length; j++){
    if(arr[j].match(/-?\d*\.{0,1}\d+/g)[1] != y1){
        y2= arr[j].match(/-?\d*\.{0,1}\d+/g)[1];
        break; 
    }
    
}

 var area= (Math.max(x1,x2)-Math.min(x1,x2)) * (Math.max(y1,y2)-Math.min(y1,y2));
 return area; 
}

OverlappingRectangles(readline() );           
