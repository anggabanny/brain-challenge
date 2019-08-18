function anagrams(word, words) {
    var output = [];
    var wordBaru = word.split("").sort().join("");
    for (i = 0; i < words.length; i++) {
        var WordsBaru = words[i].split("").sort().join("");
        if (wordBaru === WordsBaru) {
            output.push(words[i]);
        }
    }
    return output;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));