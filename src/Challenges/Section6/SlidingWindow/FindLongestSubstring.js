export default class FindLongestSubstring {
  // Write a function called findLongestSubstring, which accepts a string and returns the length 
  // of the longest substring with all distinct characters.

  // findLongestSubstring('') // 0
  // findLongestSubstring('rithmschool') // 7
  // findLongestSubstring('thisisawesome') // 6
  // findLongestSubstring('thecatinthehat') // 7
  // findLongestSubstring('bbbbbb') // 1
  // findLongestSubstring('longestsubstring') // 8
  // findLongestSubstring('thisishowwedoit') // 6
  // Time Complexity - O(n)

  constructor() {
    console.log(
      " Sliding Window - findLongestSubstring\n",
      "findLongestSubstring('') => 0\n",
      this.findLongestSubstring('')
    );
    console.log(
      " Sliding Window - findLongestSubstring\n",
      "findLongestSubstring('rithmschool') => 7\n",
      this.findLongestSubstring('rithmschool')
    );
    console.log(
      " Sliding Window - findLongestSubstring\n",
      "findLongestSubstring('thisisawesome') => 6\n",
      this.findLongestSubstring('thisisawesome')
    );
    console.log(
      " Sliding Window - findLongestSubstring\n",
      "findLongestSubstring('thecatinthehat') => 7\n",
      this.findLongestSubstring('thecatinthehat') 
    );
    console.log(
      " Sliding Window - findLongestSubstring\n",
      "findLongestSubstring('bbbbbb') => 1\n",
      this.findLongestSubstring('bbbbbb')
    );
    console.log(
      " Sliding Window - findLongestSubstring\n",
      "findLongestSubstring('longestsubstring') => 8\n",
      this.findLongestSubstring('longestsubstring') 
    );
    console.log(
      " Sliding Window - findLongestSubstring\n",
      "findLongestSubstring('thisishowwedoit') => 6\n",
      this.findLongestSubstring('thisishowwedoit')
    );
  }

  findLongestSubstring(txt = "") {
    let longestText = new Set();
    let left = 0;
    let right = 0;
    let longestSubstring = 0;

    while (left < txt.length) {
      if (longestText.has(txt[right]) || right === txt.length) {
        longestSubstring = Math.max(longestSubstring, longestText.size);
        left++;
        right = left;
        longestText.clear();
      } else {
        longestText.add(txt[right]);
        right++;
      }
    }
  }
}
