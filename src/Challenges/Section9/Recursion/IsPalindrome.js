export default class IsPalindrome {
  // Write a recursive function called isPalindrome which returns true if the 
  // string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

  // isPalindrome('awesome') // false
  // isPalindrome('foobar') // false
  // isPalindrome('tacocat') // true
  // isPalindrome('amanaplanacanalpanama') // true
  // isPalindrome('amanaplanacanalpandemonium') // false

  constructor() {
    console.log(
      "Section9 - isPalindrome",
      "this.isPalindrome('awesome') => false",
      this.isPalindrome("awesome")
    );
    console.log(
      "Section9 - isPalindrome",
      "this.isPalindrome('foobar') => false",
      this.isPalindrome("foobar")
    );
    console.log(
      "Section9 - isPalindrome",
      "this.isPalindrome('tacocat') => true",
      this.isPalindrome("tacocat")
    );
    console.log(
      "Section9 - isPalindrome",
      "this.isPalindrome('amanaplanacanalpanama') => true",
      this.isPalindrome("amanaplanacanalpanama")
    );
    console.log(
      "Section9 - isPalindrome",
      "this.isPalindrome('amanaplanacanalpandemonium') => false",
      this.isPalindrome("amanaplanacanalpandemonium")
    );
  }

  isPalindrome(text = "") {
    let result = true;

    const reverseHelper = (left, right) => {
      result = text[left] === text[right];
      if (!result) {
        return result;
      }
      if (left >= right) {
        return result;
      }
      left += 1;
      right -= 1;
      reverseHelper(left, right);
    };

    reverseHelper(0,text.length - 1);

    return result;
  }
}
