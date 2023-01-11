export default class MaxSubarraySum {
  // Given an array of integers and a number, write a function called maxSubarraySum, 
  // which finds the maximum sum of a subarray with the length of the number passed to the function.

  // Note that a subarray must consist of consecutive elements from the original array. 
  // In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

  // maxSubarraySum([100,200,300,400], 2) // 700
  // maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
  // maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
  // maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
  // maxSubarraySum([2,3], 3) // null
  // Constraints:

  // Time Complexity - O(N)

  // Space Complexity - O(1)

  constructor() {
    console.log(
      " Sliding Window - maxSubarraySum\n",
      "maxSubarraySum([100,200,300,400], 2) => 700\n",
      this.maxSubarraySum([100,200,300,400], 2)
    );
    console.log(
      " Sliding Window - maxSubarraySum\n",
      "maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) => 39\n",
      this.maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)
    );
    console.log(
      " Sliding Window - maxSubarraySum\n",
      "maxSubarraySum([-3,4,0,-2,6,-1], 2) => 5\n",
      this.maxSubarraySum([-3,4,0,-2,6,-1], 2)
    );
    console.log(
      " Sliding Window - maxSubarraySum\n",
      "maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) => 5\n",
      this.maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) 
    );
    console.log(
      " Sliding Window - maxSubarraySum\n",
      "maxSubarraySum([2,3], 3) => null\n",
      this.maxSubarraySum([2,3], 3)
    );
  }

  maxSubarraySum(arr1 = [], sumLength = 0) {
    
    if (sumLength > arr1.length) {
      return null;
    }

    let maxSum = 0;
    let tempSum = 0;
    
    for (let idx = 0; idx < sumLength; idx++) {
      const element = arr1[idx];
      maxSum += element;
    }

    tempSum = maxSum;

    for (let idx = sumLength; idx < arr1.length; idx++) {
      tempSum = tempSum + arr1[idx] - arr1[idx - sumLength];
      maxSum = Math.max(maxSum,tempSum)
    }


    return maxSum;

  }
}
