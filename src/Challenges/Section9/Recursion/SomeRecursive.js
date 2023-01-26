export default class SomeRecursive {
  // Write a recursive function called someRecursive which accepts an array and a callback.
  // The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

  // SAMPLE INPUT / OUTPUT
  // const isOdd = val => val % 2 !== 0;

  // someRecursive([1,2,3,4], isOdd) // true
  // someRecursive([4,6,8,9], isOdd) // true
  // someRecursive([4,6,8], isOdd) // false
  // someRecursive([4,6,8], val => val > 10); // false

  constructor() {
    const isOdd = val => val % 2 !== 0;

    console.log(
      "Section9 - someRecursive",
      "this.someRecursive([1,2,3,4], isOdd) => true",
      this.someRecursive([1,2,3,4], isOdd)
    );
    console.log(
      "Section9 - someRecursive",
      "this.someRecursive([4,6,8,9], isOdd) => true",
      this.someRecursive([4,6,8,9], isOdd)
    );
    console.log(
      "Section9 - someRecursive",
      "this.someRecursive([4,6,8], isOdd) => false",
      this.someRecursive([4,6,8], isOdd)
    );
    console.log(
      "Section9 - someRecursive",
      "this.someRecursive([4,6,8], val => val > 10)) => false",
      this.someRecursive([4,6,8], val => val > 10)
    );
  }

  someRecursive(arr = [], callbackFun = () => false) {
    let result = false;
    
    const helper = (tempArray) => {
      if (result || tempArray.length === 0) {
        return;
      }
      result = callbackFun(tempArray[0]);
      helper(tempArray.splice(1));
    };

    helper(arr);
    

    return result;
  }
}
