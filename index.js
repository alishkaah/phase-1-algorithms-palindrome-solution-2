function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length /2; i++) {
    const j = word.length -1 -i;
    if (word[i] !== word[j]) return false;
}
return true;
}

isPalindrome('alishka')

/* 
  Add your pseudocode here

  1. Declare a function isPalindrome(word)
  2. declare a for loop to iterate half the number on the array
  3. declare  if (word[i] !== word[j]) which compares the first index with the last index on the array 
  4. return false if both statements are inequal to each other
  5. else return true
*/

/*
  Add written explanation of your solution here
  1. the function isPalindrome holds all our argurements
  2. the for loop iterates over the first half of the array since we divided by 2
  3. the if statement does a comparison between the first index and the last index
  4. the return statement will return false if the statement was false
  5. else if the statement was true and the first array was equal to the last one the code returned will be true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
