function extractVowels(name) {
  return Array.from(name)
    .filter(char => /[aeiou]/i.test(char)) // The i flag makes it case-insensitive, so it matches both lowercase and uppercase vowels.
    .join('');
}

// Example:
console.log(extractVowels("Victoire")); // Output: "ioie"
