function sayHello( name, city, state ) {
  return `Hello, ${name.join(", ")}! Welcome to ${city} ${state}`;
}

console.log(sayHello(["Victor", "Ushindi"], "New york", "America"));


// let use arrow function
/*const sayHelle = (name, city, state) => {
    return `Hello, ${name.join(", ")}! Welcome to ${city} ${state}`;
}*/ //or

/*
function sayHello(name, city, state) {
  const fullName = name.join(' ');
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
} */