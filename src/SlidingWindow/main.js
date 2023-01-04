export default class SlidingWindow {
  // write a function called maxSubarraySum which accepts an
  // array of integers and a number called n. the function should
  // calculate the maximum sum of n consecutive elements in the array.

  constructor() {
    console.log(
      "SlidingWindow",
      "maxSubarraySum([1,2,5,2,8,1,5], 2) => 10",
      "result: " + this.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([1,2,5,2,8,1,5], 4) => 17",
      "result: " + this.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([4,2,1,6], 1) => 6",
      "result: " + this.maxSubarraySum([4, 2, 1, 6], 1)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([4,2,1,6,2], 4) => 13",
      "result: " + this.maxSubarraySum([4, 2, 1, 6, 2], 4)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([], 4) => null",
      "result: " + this.maxSubarraySum([], 4)
    );
  }

  maxSubarraySum(arr1 = [], maxLength = 0) {
    let leftPointer = 0;
    let rightPointer = 1;
    let maxSum = 0;
    let tempMaxSum = 0;
    let counter = 1;
    // iterate for each element as window aproach
    // keep max sum
    // if counter is equal to maxlength start again keeping maxSum to compare with the next values
    if (arr1.length < maxLength) {
      return null;
    }
    tempMaxSum = arr1[leftPointer];
    while (leftPointer <= arr1.length) {
      if (counter === maxLength) {
        if (tempMaxSum > maxSum) {
          maxSum = tempMaxSum;
        }
        counter = 1;
        leftPointer++;
        tempMaxSum = arr1[leftPointer];
        rightPointer = leftPointer + 1;
      } else {
        if (arr1[rightPointer] === undefined) {
          return maxSum;
        }
        tempMaxSum = tempMaxSum + arr1[rightPointer];
        rightPointer++;
        counter++;
      }
    }

    return maxSum;
  }
}
