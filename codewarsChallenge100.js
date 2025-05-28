function hello(callback){
    console.log("Hello!");
    callback();
}

hello(goodbye);

function goodbye(){
  console.log("Goodbye!")
}  

function wait(){
  console.log("wait")
}

function leave(){
  console.log("leave")
}