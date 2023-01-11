export default class IsSubsequence {
  // Write a function called isSubsequence which takes in two strings and checks whether 
  // the characters in the first string form a subsequence of the characters in the second string. 
  // In other words, the function should check whether the characters in the first string appear 
  // somewhere in the second string, without their order changing.

  // Examples:

  // isSubsequence('hello', 'hello world'); // true
  // isSubsequence('sing', 'sting'); // true
  // isSubsequence('abc', 'abracadabra'); // true
  // isSubsequence('abc', 'acb'); // false (order matters)
  // Your solution MUST have AT LEAST the following complexities:

  // Time Complexity - O(N + M)

  // Space Complexity - O(1)

  constructor() {
    console.log(
      " Multiple Pointers - isSubsequence\n",
      "isSubsequence('hello', 'hello world') => true\n",
      this.isSubsequence('hello', 'hello world')
    );
    console.log(
      " Multiple Pointers - isSubsequence\n",
      "isSubsequence('sing', 'sting') => true\n",
      this.isSubsequence('sing', 'sting')
    );
    console.log(
      " Multiple Pointers - isSubsequence\n",
      "isSubsequence('abc', 'abracadabra') => true\n",
      this.isSubsequence('abc', 'abracadabra')
    );
    console.log(
      " Multiple Pointers - isSubsequence\n",
      "isSubsequence('abc', 'acb') => false\n",
      this.isSubsequence('abc', 'acb')
    );
  }

  isSubsequence(txt1 = "", txt2 = "") {
    
    if (txt1.length > txt2.length) {
      return false;
    }

    let leftPointer = 0;
    let rightPointer = 0;

    while (rightPointer <= txt2.length) {
      if (leftPointer > txt1.length) {
        return false;
      } else if (leftPointer === txt1.length) {
        return true;
      } else if (txt1[leftPointer] === txt2[rightPointer]) {
        leftPointer++;
      }
      rightPointer++;
    }

    return false;

  }
}
