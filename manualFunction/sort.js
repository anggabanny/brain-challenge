function sort(data) {
    for(var i = 0 ; i < data.length; i ++){
        for(var j = 0 ; j < data.length; j ++){
            if (data[j] > data[j+1]) {
                var temp = data[j]
                data[j] = data[j+1]
                data[j+1] = temp
            }
        }
    }
    return data
}
console.log(sort([0,1,9,7,8,6,4,5,3,2]));
