export default class AveragePair {
  // Write a function called averagePair.
  // Given a sorted array of integers and a target average,
  // determine if there is a pair of values in the array where the average
  // of the pair equals the target average.
  // There may be more than one pair that matches the average target.

  // Bonus Constraints:
  // Time: O(N)
  // Space: O(1)

  // Sample Input:
  // averagePair([1,2,3],2.5) // true
  // averagePair([1,3,3,5,6,7,10,12,19],8) // true
  // averagePair([-1,0,3,4,5,6], 4.1) // false
  // averagePair([],4) // false

  constructor() {
    console.log(
      " Multiple Pointers - averagePair\n",
      "averagePair([1,2,3],2.5) => true\n",
      this.averagePair([1, 2, 3], 2.5)
    );
    console.log(
      " Multiple Pointers - averagePair\n",
      "averagePair([1,3,3,5,6,7,10,12,19],8) => true\n",
      this.averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)
    );
    console.log(
      " Multiple Pointers - averagePair\n",
      "averagePair([-1,0,3,4,5,6], 4.1) => false\n",
      this.averagePair([-1, 0, 3, 4, 5, 6], 4.1)
    );
    console.log(
      " Multiple Pointers - averagePair\n",
      "averagePair([],4) => false\n",
      this.averagePair([], 4)
    );
  }

  averagePair(arr1 = [], average = 0) {
    // because is a SORTED ARRAY one pointer can start from Last Item
    let leftPointer = 0;
    let rightPointer = arr1.length - 1;

    while (leftPointer < rightPointer) {
      const avgResult = (arr1[leftPointer] + arr1[rightPointer]) / 2;
      if (avgResult === average) {
        return true;
      } else if (avgResult > average) {
        rightPointer--;
      } else {
        leftPointer++;
      }
    }
    return false;

  }
}
