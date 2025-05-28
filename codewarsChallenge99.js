let pattern = /\bb\w*/g; // The first 'b' is a word boundary (\b), ensuring 'b' is at the start of a word; the second 'b' matches the letter 'b' itself.
console.log("banana boat tomato".match(pattern)); // ["b", "b"] - matches 'b' at the start of 'banana' and 'boat' and ignores 'tomato' since it doesn't start with 'b' by ouptputting an array of matches


// /b/ finds any 'b' in the string.
// /\bb\w*/ finds whole words starting with 'b'.
// \w*: Match zero or more word characters (letters, digits, underscore).
// g: Find all matches in the string, not just the first.