function extractVowels(name) {
  return Array.from(name)
    .filter(char => /[aeiou]/i.test(char))
    .join('');
}

// Example:
console.log(extractVowels("Victoire")); // Output: "ioie"
