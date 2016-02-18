function CoinDeterminer(sum) { 

  var subProblemMinVals= [0]; 
var lastCoinUsed= [0];
var coins = [1,5,7,9,11];
var mapObj = {}; 
 
var min = 0; 
var minimum= 0; 
var prev= 0; 
 var prevCoin= 0; 

//for loop that goes from 1 to the size of desired change
for(var i =1; i<= sum; i++){
    
        //A nested for loop that goes through each coin 
        for(var j= 0; j<coins.length; j++){
        //if statement checking to see if current coin is greater than my current sum
        if(coins[j] > i){
            //yes: do nothing and continue to next coin 
            continue; 
            
            }
            //no:
            else if(coins[j]<= i ){ 
                console.log("im at " +i + "  coin: " + coins[j]);
            // Do formula - 1+ value of c[p-cur coin] and map the coin and formula outcome in as keys in an obj 
            min= 1+ subProblemMinVals[i-coins[j]];
            console.log(min);
            mapObj[coins[j]]= min; 
            console.log(mapObj);
            }
            
        //end of nested for loop 
        }
    // find the minimum value in the map object 
    prev= mapObj[Object.keys(mapObj)[0]];
    console.log(prev);
    minimum= prev; 
    
    for(prop in mapObj){
        
        if(mapObj[prop]< prev){
            prev= mapObj[prop];
            minimum= mapObj[prop]; 
            prevCoin = prop; 
        }
        
    }
    // put that minimum value inside of my c[p] array put that key inside the s[p] array 
    subProblemMinVals.push(minimum);
    lastCoinUsed.push(prevCoin);
console.log("cp " + subProblemMinVals);
console.log("sp " + lastCoinUsed);

}

return subProblemMinVals[subProblemMinVals.length-1];





         
}