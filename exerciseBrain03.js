var name = '12345639178329173101091'

var name1 = name.split('')

var temp = []
for(var i = 0; i < name1.length; i++){
    if (temp.indexOf(name1[i]) == -1) {
        temp.push(name1[i])
    }
}
console.log(temp);