import FrequencyCounterPatternAnagrams from "./Anagrams";

export default class FrequencyCounterPattern {
  static firstExample() {
    // function that takes 2 arrays and returns a true if
    // every value in the array has a corresponding the squared value in the second array

    // same([1, 2], [4 , 2]) => true
    // same([1, 2], [4 , 2]) => true

    function same(arr1 = [], arr2 = []) {
      let frequencyCounter = {};

      if (arr1.length !== arr2.length) {
        return false;
      }

      for (let idx = 0; idx < arr1.length; idx++) {
        const el1 = arr1[idx] ** 2;
        const el2 = arr2[idx];
        frequencyCounter[el1] = (frequencyCounter[el1] || 0) + 1;
        frequencyCounter[el2] = (frequencyCounter[el2] || 0) - 1;
      }

      for (const key in frequencyCounter) {
        if (frequencyCounter.hasOwnProperty(key)) {
          const element = frequencyCounter[key];
          if (element !== 0) {
            return false;
          }
        }
      }

      return true;
    }

    console.log(
      "FrequencyCounterPattern",
      "same([1, 2], [4 , 2])",
      "result: " + same([1, 2, 1], [4, 1, 1])
    );
  }

  static anagram()  {
    new FrequencyCounterPatternAnagrams();
  }
}
