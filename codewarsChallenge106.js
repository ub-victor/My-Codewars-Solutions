function countVowels(name) {
  let count = 0;
  for (let char of name.toLowerCase()) {
    if (/[aeiou]/.test(char)) { // Check if the character is a vowel
      count++;
    }
  }
  return count; // Return the total count of vowels
}

// Example:
console.log(countVowels("Victoire")); // Output: 4