window.onload = function(){

    const pi = 3.142;
    
    function calArea(r){
      const pi =10; //local scope variable 
      console.log("The area is: " + pi*r*r);
    
        }
        console.log(pi); //global scope variable
        calArea(5);
    }
    