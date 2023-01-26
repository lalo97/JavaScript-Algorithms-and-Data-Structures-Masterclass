export default class Reverse {
  // Write a recursive function called reverse which accepts a string and returns a new string in reverse.

  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

  constructor() {
    console.log(
      "Section9 - reverse",
      "this.reverse('awesome') => 'emosewa'",
      this.reverse("awesome")
    ); // true
    console.log(
      "Section9 - reverse",
      "this.reverse('rithmschool') => 'loohcsmhtir'",
      this.reverse("rithmschool")
    );
  }

  reverse(text = "") {
    let result = "";

    const reverseHelper = (position) => {
      result += text[position];
      if (position === 0) {
        return;
      }
      reverseHelper(position - 1);
    };

    reverseHelper(text.length - 1);

    return result;
  }
}
