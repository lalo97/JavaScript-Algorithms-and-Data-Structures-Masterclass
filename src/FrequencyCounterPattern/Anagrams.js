export default class FrequencyCounterPatternAnagrams {
  // Given 2 string check if both are anagrams

  // same("car", "rat") => true
  // same("cinema", "iceman") => true

  constructor() {
    console.log(
      "FrequencyCounterPattern",
      "same('cinema', 'iceman')",
      "result: " + this.same("cinema", "iceman")
    );
  }

  same(arr1 = "", arr2 = "") {
    let frequencyCounter = {};

    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let idx = 0; idx < arr1.length; idx++) {
      const el1 = arr1[idx].toLowerCase();
      const el2 = arr2[idx].toLowerCase();
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
}
