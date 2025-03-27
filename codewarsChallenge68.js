const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);

// const iterator = colors.values();
//  iterator.next(); // { value: 'red', done: false }

for (const color of colors){
    console.log(color);
}