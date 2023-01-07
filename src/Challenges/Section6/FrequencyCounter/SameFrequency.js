export default class SameFrequency {
  // Write a function called sameFrequency. Given two positive integers,
  // find out if the two numbers have the same frequency of digits.
  // Your solution MUST have the following complexities:
  // Time: O(N)
  // Sample Input:
  // sameFrequency(182,281) // true
  // sameFrequency(34,14) // false
  // sameFrequency(3589578, 5879385) // true
  // sameFrequency(22,222) // false

  constructor() {
    console.log(
      "Frequency Counter - sameFrequency",
      "this.sameFrequency(182, 281) => true -",
      this.sameFrequency(182, 281)
    ); // true
    console.log(
      "Frequency Counter - sameFrequency",
      "this.sameFrequency(34, 14) => false -",
      this.sameFrequency(34, 14)
    ); // false
    console.log(
      "Frequency Counter - sameFrequency",
      "this.sameFrequency(3589578, 5879385) => true -",
      this.sameFrequency(3589578, 5879385)
    ); // true
    console.log(
      "Frequency Counter - sameFrequency",
      "this.sameFrequency(22, 222) => false -",
      this.sameFrequency(22, 222)
    ); // false
  }

  sameFrequency(numb1 = 0, numb2 = 0) {
    const text1 = numb1.toString();
    const text2 = numb2.toString();

    if (text1.length !== text2.length) {
      return false;
    }

    let frequency = {};

    for (let idx = 0; idx < text1.length; idx++) {
      const charText1 = text1[idx];
      const charText2 = text2[idx];

      frequency[charText1] = (frequency[charText1] || 0) + 1;
      frequency[charText2] = (frequency[charText2] || 0) - 1;
    }

    for (const key in frequency) {
      if (Object.hasOwnProperty.call(frequency, key)) {
        const item = frequency[key];
        if (item !== 0) {
          return false;
        }
      }
    }

    return true;
  }
}
