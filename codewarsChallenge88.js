function updateLight(current) {
  
  //your code here!
  
  if(current === "green"){
    return "yellow";
  }else if(current === "yellow"){
    return "red";
  }else if (current = "red"){
    return "green";
  }else {
    return "The traffic light is off";
  }
  
}

console.log(updateLight("green"));