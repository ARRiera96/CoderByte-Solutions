function FibonacciChecker(num) { 

var a = 0, b = 1, f = 1;

fibArray= [];
    for(var i = 2; i <= num+1; i++) {
        f = a + b;
        a = b;
        b = f;
        fibArray.push(f); 
    }
    
    if(fibArray.indexOf(num) != -1){
        return 'yes';
    }
    else 
    return 'no';
  
         
}