export default class BinarySearch {
  // Write a function called linearSearch which accepts an array and a value,
  // and returns the index at which the value exists. If the value does not
  // exist in the array, return -1.

  // Don't use indexOf to implement this function!

  // Examples:

  // binarySearch([1,2,3,4,5],2) // 1
  // binarySearch([1,2,3,4,5],3) // 2
  // binarySearch([1,2,3,4,5],5) // 4
  // binarySearch([1,2,3,4,5],6) // -1
  // binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
  // binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) // 16
  // binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1

  constructor() {
    // console.log(
    //   "Section9 - binarySearch",
    //   "this.binarySearch([1,2,3,4,5],2) => 1",
    //   this.binarySearch([1,2,3,4,5],2)
    // );
    // console.log(
    //   "Section9 - binarySearch",
    //   "this.binarySearch([1,2,3,4,5],3) => 2",
    //   this.binarySearch([1,2,3,4,5],3)
    // );
    // console.log(
    //   "Section9 - binarySearch",
    //   "this.binarySearch([1,2,3,4,5],5) => 4",
    //   this.binarySearch([1,2,3,4,5],5)
    // );
    // console.log(
    //   "Section9 - binarySearch",
    //   "this.binarySearch([1,2,3,4,5],6)=> -1",
    //   this.binarySearch([1,2,3,4,5],6)
    // );
    // console.log(
    //   "Section9 - binarySearch",
    //   "this.binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) => 2",
    //   this.binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)
    // );
    console.log(
      "Section9 - binarySearch",
      "this.binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) => 16",
      this.binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)
    );
    // console.log(
    //   "Section9 - binarySearch",
    //   "this.binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) => -1",
    //   this.binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)
    // );
  }

  binarySearch(sortedArray = [], searchValue) {
    let leftPosition = 0;
    let rightPosition = sortedArray.length - 1;

    while (leftPosition < rightPosition) {
      const average = Math.floor((rightPosition - leftPosition) / 2);
      const middlePoint = leftPosition + average;

      if (sortedArray[middlePoint] === searchValue) {
        return middlePoint;
      }
      if (sortedArray[middlePoint] > searchValue) {
        rightPosition = middlePoint - 1;
      } else if (sortedArray[middlePoint] < searchValue) {
        leftPosition = middlePoint + 1;
      }
    }

    if (leftPosition === rightPosition && sortedArray[leftPosition] === searchValue) {
      return leftPosition;
    }

    return -1;
  }
}
