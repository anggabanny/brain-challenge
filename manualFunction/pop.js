function pop(arr) {
    var temp = []
    for(var i = 0 ; i <arr.length-1; i++){
        temp.push(arr[i])
    }
    return temp
}

console.log(pop(['angga','banny','ridwan', 'syahputra']))