export default class LinearSearch {
  // Write a function called linearSearch which accepts an array and a value,
  // and returns the index at which the value exists. If the value does not
  // exist in the array, return -1.

  // Don't use indexOf to implement this function!

  // Examples:

  // linearSearch([10, 15, 20, 25, 30], 15) // 1
  // linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
  // linearSearch([100], 100) // 0
  // linearSearch([1,2,3,4,5], 6) // -1
  // linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
  // linearSearch([100], 200) // -1

  constructor() {
    console.log(
      "Section9 - linearSearch",
      "this.linearSearch([10, 15, 20, 25, 30], 15) => 1",
      this.linearSearch([10, 15, 20, 25, 30], 15)
    );
    console.log(
      "Section9 - linearSearch",
      "this.linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) => 5",
      this.linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)
    );
    console.log(
      "Section9 - linearSearch",
      "this.linearSearch([100], 100) => 0",
      this.linearSearch([100], 100)
    );
    console.log(
      "Section9 - linearSearch",
      "this.linearSearch([1,2,3,4,5], 6)=> -1",
      this.linearSearch([1, 2, 3, 4, 5], 6)
    );
    console.log(
      "Section9 - linearSearch",
      "this.linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) => -1",
      this.linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)
    );
    console.log(
      "Section9 - linearSearch",
      "this.linearSearch([100], 200) => -1",
      this.linearSearch([100], 200)
    );
  }

  linearSearch(arr = [0], elemetToFind) {
    for (let idx = 0; idx < arr.length; idx++) {
      const element = arr[idx];

      if (element === elemetToFind) {
        return idx;
      }
    }

    return -1;
  }
}
