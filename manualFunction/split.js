function split(data) {
    var arr = []
    for(var i = 0; i < data.length; i++){
        for(var j = 0; j < data[i].length; j++){
            arr.push(data[i][j])
        }
    }
    return arr
}
console.log(split(['anggabanny', 'ajajahs']));
