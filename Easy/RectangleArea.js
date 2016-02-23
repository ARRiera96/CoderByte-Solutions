function RectangleArea(arr) { 
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