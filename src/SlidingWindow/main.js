export default class SlidingWindow {
  static firstExample() {
    // write a function called maxSubarraySum which accepts an
    // array of integers and a number called n. the function should
    // calculate the maximum sum of n consecutive elements in the array.

    function maxSubarraySumRefactor(arr1 = [], maxLength = 0) {
      let maxSum = 0;
      let tempMaxSum = 0;
      // get first iteration
      for (let i = 0; i < maxLength; i++) {
        maxSum += arr1[i];
      }
      [1, 2, 3, 4, 5, 6, 7, 8];
      tempMaxSum = maxSum;
  
      for (let i = maxSum; i < maxLength; i++) {
        tempMaxSum = tempMaxSum - arr1[i - maxSum] + arr1[i];
        maxSum = Math.max(tempMaxSum, maxSum);
      }
  
      return maxSum;
    }

    console.log(
      "SlidingWindow",
      "maxSubarraySum([1,2,5,2,8,1,5], 2) => 10",
      "result: " + maxSubarraySumRefactor([1, 2, 5, 2, 8, 1, 5], 2)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([1,2,5,2,8,1,5], 4) => 17",
      "result: " + maxSubarraySumRefactor([1, 2, 5, 2, 8, 1, 5], 4)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([4,2,1,6], 1) => 6",
      "result: " + maxSubarraySumRefactor([4, 2, 1, 6], 1)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([4,2,1,6,2], 4) => 13",
      "result: " + maxSubarraySumRefactor([4, 2, 1, 6, 2], 4)
    );
    console.log(
      "SlidingWindow",
      "maxSubarraySum([], 4) => null",
      "result: " + maxSubarraySumRefactor([], 4)
    );
  }

}
