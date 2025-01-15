const str = "abcdffebaaa";

const charCount = {};

// Loop through the string and count each character
for (const char of str) {
  if (charCount[char]) {
    charCount[char]++;
  } else {
    charCount[char] = 1;
  }
}

// Find the character with the maximum count
let maxChar = "";
let maxCount = 0;

for (const char in charCount) {
  if (charCount[char] > maxCount) {
    maxCount = charCount[char];
    maxChar = char;
  }
}

console.log(`Character with the highest count: ${maxChar} (${maxCount} times)`);
