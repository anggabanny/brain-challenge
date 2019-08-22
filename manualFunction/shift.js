function shift(data) {
    var temp = []
    for(var i = 1; i < data.length; i++){
        temp.push(data[i])
    }
    return temp
}
console.log(shift(['angga','banny','ridwan']));
