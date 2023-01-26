import BinarySearch from "./BinarySearch";
import LinearSearch from "./LinearSearch";

export default class SearchAlgorithms {
  static linearSearch() {
    new LinearSearch();
  }
  static binarySearch() {
    new BinarySearch();
  }
  static naiveSearch() {}
}
