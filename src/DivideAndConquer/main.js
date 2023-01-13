export default class DivideAndConquer {
  static firstExample() {
    // given a sorted array of integers, write a function called search
    // that accepts a value and returns the index where the value passed to the function is located
    // if the value is not found, return -1
    // array of integers and a number called n. the function should
    // calculate the maximum sum of n consecutive elements in the array.
    function search(sortedArray = [], maxLength = 0) {}
    console.log(
      "DivideAndConquer",
      "search([1,2,3,4,5,6], 4) => 3",
      "result: " + this.search([1, 2, 3, 4, 5, 6], 4)
    );
    console.log(
      "DivideAndConquer",
      "search([1,2,3,4,5,6], 6) => 5",
      "result: " + this.search([1, 2, 3, 4, 5, 6], 6)
    );
    console.log(
      "DivideAndConquer",
      "search([1,2,3,4,5,6], 11) => -1",
      "result: " + this.search([1, 2, 3, 4, 5, 6], 11)
    );
  }
}
