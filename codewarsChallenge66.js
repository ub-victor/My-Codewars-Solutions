const months = new Set(['January', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

console.log(months.has('January')); // true
console.log(months.size);
console.log(months.values()); // it will retrieve the SetIterator object