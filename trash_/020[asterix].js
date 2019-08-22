var height = 5;

for(var i = 1 ; i <= height; i++){
    var temp = ''
    for(var j = i ; j >0 ; j--){
        temp += j
    }
    console.log(temp);
}
// 1
// 21
// 321
// 4321
// 54321
console.log();

for(var i = 1 ; i <= height; i++){
    var temp = ''
    for(var j = i ; j >0 ; j--){
        temp += i
    }
    console.log(temp);
}
// 1
// 22
// 333
// 4444
// 55555
console.log();

for(var i = 1 ; i <= height; i++){
    var temp = ''
    for(var j = 1; j <= i; j++){
        temp += j
    }
    console.log(temp);
}
// 1
// 12
// 123
// 1234
// 12345
console.log();

for(var i = height ; i >= 1; i--){
    var temp = ''
    for(var j = i ; j <= height; j++){
        temp += j
    }
    console.log(temp);
}
// 5
// 45
// 345
// 2345
// 12345
console.log();

for(var i = height; i >=1; i--){
    var temp = ''
    for(var j = height ; j >=i ; j--){
        temp+=j
    }
    console.log(temp);
}
// 5
// 54
// 523
// 5342
// 54321
console.log();