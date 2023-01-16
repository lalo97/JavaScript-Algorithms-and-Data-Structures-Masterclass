export default class ProductOfArray {
  // Write a function called productOfArray which takes in
  // an array of numbers and returns the product of them all.

  // productOfArray([1,2,3]) // 6
  // productOfArray([1,2,3,10]) // 60

  constructor() {
    console.log(
      "Recursion - productOfArray",
      "productOfArray([1,2,3]) => 6",
      "result: " + this.productOfArray([1,2,3])
    );
    console.log(
      "Recursion - productOfArray",
      "productOfArray([1,2,3,10]) => 60",
      "result: " + this.productOfArray([1,2,3,10])
    );
  }

  productOfArray(arr1 = []) {
    let total = 1;
    
    if (arr1.length === 0) {
      return total;
    }

    total *= arr1[0];

    return total * this.productOfArray(arr1.slice(1));

    
  }
}
