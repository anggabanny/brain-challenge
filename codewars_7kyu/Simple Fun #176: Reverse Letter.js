function reverseLetter(str) {
    //coding and coding..
    return str.match(/[a-z]/gi).reverse().join('')
}
console.log(reverseLetter("krishan"));
