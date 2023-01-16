import Factorial from "./Factorial";
import Fibonacci from "./Fibonacci";
import Power from "./Power";
import ProductOfArray from "./ProductOfArray";
import RecursiveRange from "./RecursiveRange";

export default class Recursion {
  // write a function called sumZero with accepts a "sorted" array of integer.
  // the function should find the first pair where the sum is 0. Return an array that includes
  // both values that sum to zero or undefined if a pair does not exist
  // every value in the array has a corresponding the squared value in the second array

  static power() {
    new Power();
  }

  static factorial() {
    new Factorial();
  }

  static productOfArray() {
    new ProductOfArray();
  }

  static recursiveRange() {
    new RecursiveRange();
  }

  static fib() {
    new Fibonacci();
  }
}
