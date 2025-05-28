function extractVowels(name) {
  return Array.from(name)
    .filter(char => /[aeiou]/i.test(char)) // The i flag makes it case-insensitive, so it matches both lowercase and uppercase vowels.
    .join('');
}

// Example:
console.log(extractVowels("Victoire")); // Output: "ioie"


//  How .filter() works:
// .filter(callback) loops over every element in the array. For each element:

// It runs the callback(element)

// If the callback returns true, the element is included in the new array

// If the callback returns false, the element is skipped


