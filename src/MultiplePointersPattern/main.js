import MultiplePointersCountUniqueValuesChallenge from "./CountUniqueValuesChallenge";

export default class MultiplePointersPattern {
  sumZero(arr1 = []) {
    let leftPointer = 0;
    let rightPointer = arr1.length - 1;

    while (leftPointer < rightPointer) {
      const leftItem = arr1[leftPointer];
      const rightItem = arr1[rightPointer];
      const sum = leftItem + rightItem;
      if (sum === 0) {
        return [leftItem, rightItem];
      } else if (sum > 0) {
        rightPointer--;
      } else {
        leftPointer++;
      }
    }

    return;
  }

  static firstExample() {
    // write a function called sumZero with accepts a "sorted" array of integer.
    // the function should find the first pair where the sum is 0. Return an array that includes
    // both values that sum to zero or undefined if a pair does not exist
    // every value in the array has a corresponding the squared value in the second array
    console.log(
      "MultiplePointersPattern",
      "sumZero([-3, -2, -1, 0, 1, 2, 3])",
      "result: " + this.sumZero([-3, -2, -1, 0, 1, 2, 3, 4])
    );
    console.log(
      "MultiplePointersPattern",
      "sumZero([-2, -1, 0, 1])",
      "result: " + this.sumZero([-2, -1, 0, 3])
    );
  }

  static countUniqueValuesChallenge() {
    new MultiplePointersCountUniqueValuesChallenge();
  }
}
