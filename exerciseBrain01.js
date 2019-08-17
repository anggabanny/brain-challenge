var obj = {
    number : [9,8,7,6,5,4,3,2,1],
}

for(var i = 0; i < obj.number.length; i++){
    for(var j = 0 ; j < obj.number.length; j++){
        if (obj.number[j] > obj.number[j+1]) {
            var temp = obj.number[j]
            obj.number[j] = obj.number[j+1]
            obj.number[j+1] = temp
        }
    }
}
console.log(obj.number);

var number = [1,2,3,4,5,6,7,8,9];
for(var i = 0; i < number.length; i++){
    for(var j = 0; j < number.length; j++){
        if (number[j] > number[j+1]) {
            var temp = number[j]
            number[j] = number[j+1]
            number[j+1] = temp
        }
    }
}
console.log(number);

var obj = [
    { number : 9,},
    { number : 1,},
    { number : 4,},
    { number : 2,},
]

console.log(obj[1].number);
for(var i = 0 ; i < obj.length; i++){
    for(var j = 0; j < obj.length -1; j++){
        if(obj[j].number < obj[j+1].number){
            var temp = obj[j].number
            obj[j].number = obj[j+1].number
            obj[j+1].number = temp
        }
        
    }
}
console.log(obj);