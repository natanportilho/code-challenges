class Trie {
    constructor() {
        this.node = new Node("*");
    }

    add(word) {
        this.node.add(word);
    }

    find (word){
        return this.node.find(word);
    }
}

class Node {
    constructor(char) {
        this.isWord = false;
        this.char = char;
        this.nodes = Array(25);
    }

    add(word) {
        if (word.length == 0){
            this.isWord = true;
            return;
        }
        var letter = word.charAt(0);
        var indexLetter = letter - 'a'.charCodeAt(0);
        
        if (this.nodes[indexLetter] == null){
            this.nodes[indexLetter] = new Node(letter);
        }
        this.nodes[indexLetter].add(word.substring(1));
    }

    find(word){
        if (word.length == 0){
            return this.isWord;
        }
        var letter = word.charAt(0);
        var indexLetter = letter - 'a'.charCodeAt(0);
        
        if (this.nodes[indexLetter] == null){
            return false;
        }
        return this.nodes[indexLetter].find(word.substring(1));
    }
}

function testTrie() {
    var trie = new Trie();
    trie.add("natan");
    console.log(trie.find("natan"));
    console.log(trie.find("natann"));
    console.log(trie.find("n"));
    console.log(trie.find("na"));
    console.log(trie.find("nat"));
}

testTrie();




