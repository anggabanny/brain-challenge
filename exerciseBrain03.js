var name = '12345639178329173101091'

var name1 = name.split('')

var temp = []
for(var i = 0; i < name1.length; i++){
    if (!temp.includes(name1[i])) {
        temp.push(name1[i])
    }
}
console.log(temp);
