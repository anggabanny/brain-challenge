function isPalindrome(x) {
    x = x.toLowerCase()
    
    var g = x.split('').reverse().join('')
    
    return x == g ? true : false
    
}

console.log(isPalindrome('Abba'));
console.log(isPalindrome('aba'));