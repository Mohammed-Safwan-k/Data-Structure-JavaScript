class Node {
  constructor(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = {};
  }
}
class Trie {
  constructor() {
    this.root = new Node(null);
  }
  insert(word) {
    let current = this.root;
    for (let character of word) {
      if (!current.children[character]) {
        current.children[character] = new Node(character);
      }
      current = current.children[character];
    }
    current.isEndOfWord = true;
  }
  search(word) {
    let current = this.root;
    for (let character of word) {
      if (!current.children[character]) {
        return false;
      }
      current = current.children[character];
    }
    return current.isEndOfWord;
  }
}
const trie = new Trie();
trie.insert("HELLO");
trie.insert("HAI");
console.log(trie);
console.log(trie.search("HELLO"));
console.log(trie.search("Hai"));
