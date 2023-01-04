export default class MultiplePointersCountUniqueValuesChallenge {
  // implement a function called countUniqueValues
  // which accept a sorted array, and counts the unique values in the array
  // There can be negative numbers in the array but it will always be sorted

  constructor() {
    console.log(
      "MultiplePointersCountUniqueValuesChallenge",
      "countUniqueValues([1,1,1,1,1,2]) => 2",
      "result: " + this.countUniqueValues([1, 1, 1, 1, 1, 2])
    );
    console.log(
      "MultiplePointersCountUniqueValuesChallenge",
      "countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) => 7",
      "result: " + this.countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
    );
    console.log(
      "MultiplePointersCountUniqueValuesChallenge",
      "countUniqueValues([]) => 0",
      "result: " + this.countUniqueValues([])
    );
    console.log(
      "MultiplePointersCountUniqueValuesChallenge",
      "countUniqueValues([-2, -1, -1, 0, 1]) => 4",
      "result: " + this.countUniqueValues([-2, -1, -1, 0, 1])
    );
  }

  countUniqueValues(arr1 = []) {
    let leftPointer = 0,
      rightPointer = 1,
      counter = 0;

    while (rightPointer <= arr1.length) {
      const lastUniqueElement = arr1[leftPointer];
      const eachElement = arr1[rightPointer];

      if (lastUniqueElement !== eachElement) {
        leftPointer = rightPointer;
        counter++;
      }

      rightPointer++;
    }

    return counter;
  }

  countUniqueValues2(arr1 = []) {
    return new Set(arr1).size;
  }
}
