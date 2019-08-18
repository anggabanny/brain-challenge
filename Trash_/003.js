var angka = 123456789;
var abjad = 'abcdefrg';

angka = angka.toString()
var tempArr = []
for(var i = 0; i < angka.length; i++){
    tempArr.push(angka[i])
}

for(var i = 0; i < tempArr.length; i++){
    for(var j = 0; j < tempArr.length; j++){
        if (tempArr[j] < tempArr[j+1]) {
            var temp = tempArr[j]
            tempArr[j] = tempArr[j+1]
            tempArr[j+1] = temp
        }
    }
}

var output = ''

for(var i = 0; i < tempArr.length; i++){
    output += tempArr[i]
}

console.log(Number(output));



