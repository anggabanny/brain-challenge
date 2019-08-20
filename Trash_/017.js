var test = 'angga-banny-ridwan-syahputra'

var arr = []
var temp = []
for(var i = 0 ; i < test.length; i++){
    if (test[i] == '-') {
        arr.push(temp)
        temp = []
    } else {
        temp.push(test[i])
    }
}
arr.push(temp)

console.log(arr);
console.log(test);
console.log(temp);