export default class CapitalizeFirst {
  // Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

  constructor() {
    console.log(
      "Section9 - capitalizeFirst",
      "this.capitalizeFirst(['car','taco','banana']) => ['Car','Taco','Banana']",
      this.capitalizeFirst(['car','taco','banana'])
    );
  }

  capitalizeFirst(arr = ['']) {
    const result = [];

    const capitalizeHelper = (tempArray = []) => {
      // if we dont have elements anymore stop recursion
      if (tempArray.length === 0) {
        return;
      }

      // capitalize word
      const text = tempArray[0].charAt(0).toUpperCase() + tempArray[0].slice(1);

      // insert into result array
      result.push(text)

      // continue with next element from array
      capitalizeHelper(tempArray.slice(1));
    };

    capitalizeHelper(arr);

    return result;
  }
}
