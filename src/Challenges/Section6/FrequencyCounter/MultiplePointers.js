export default class MultiplePointers {
  // Implement a function called, areThereDuplicates which accepts a variable number of arguments,
  // and checks whether there are any duplicates among the arguments passed in.
  // You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  // Examples:
  // areThereDuplicates(1, 2, 3) // false
  // areThereDuplicates(1, 2, 2) // true
  // areThereDuplicates('a', 'b', 'c', 'a') // true
  // Restrictions:

  // Time - O(n)
  // Space - O(n)

  // Bonus:
  // Time - O(n log n)
  // Space - O(1)

  constructor() {
    console.log(
      " Frequency Counter / Multiple Pointers - areThereDuplicates\n",
      "areThereDuplicates(1, 2, 3) => false\n",
      this.areThereDuplicates(1, 2, 3)
    );
    console.log(
      " Frequency Counter / Multiple Pointers - areThereDuplicates\n",
      "areThereDuplicates(1, 2, 2) => true\n",
      this.areThereDuplicates(1, 2, 2)
    );
    console.log(
      " Frequency Counter / Multiple Pointers - areThereDuplicates\n",
      "areThereDuplicates('a', 'b', 'c', 'a') => true\n",
      this.areThereDuplicates("a", "b", "c", "a")
    );
  }

  areThereDuplicates(...args) {
    const areThereDuplicates = args.length !== new Set(args).size;
    return areThereDuplicates;
  }
}
