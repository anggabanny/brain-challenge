var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    var potong = []
    var check = '0'
    for(var i = 0 ; i < iterable.length; i++){
        for(var j = 0 ; j < iterable.length;j++){
            
            if (iterable[i] == iterable[j]) {
                if (check !== iterable[i]) {
                    potong.push(iterable[i])
                    check =  iterable[i]
                }
            }
        }
    }
    return potong
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
