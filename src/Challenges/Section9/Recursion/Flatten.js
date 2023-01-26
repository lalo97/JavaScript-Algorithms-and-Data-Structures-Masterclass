export default class Flatten {
  // Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

  constructor() {
    console.log(
      "Section9 - flatten",
      "this.flatten([1, 2, 3, [4, 5] ]) => [1, 2, 3, 4, 5]",
      this.flatten([1, 2, 3, [4, 5]])
    );
    console.log(
      "Section9 - flatten",
      "this.flatten([1, [2, [3, 4], [[5]]]]) => [1, 2, 3, 4, 5]",
      this.flatten([1, [2, [3, 4], [[5]]]])
    );
    console.log(
      "Section9 - flatten",
      "this.flatten([[1],[2],[3]]) => [1,2,3]",
      this.flatten([[1], [2], [3]])
    );
    console.log(
      "Section9 - flatten",
      "this.flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) => [1,2,3]",
      this.flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
    );
  }

  flatten(arr = []) {
    let result = [];

    const helper = (tempArray = []) => {
      if (tempArray.length === 0) {
        return;
      }

      if (Array.isArray(tempArray[0])) {
        helper(tempArray[0]);
      } else {
        result.push(tempArray[0]);
      }

      helper(tempArray.slice(1));
    };

    helper(arr);

    return result;
  }
}
