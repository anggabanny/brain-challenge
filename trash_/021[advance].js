var height = 5;

for (var i = 1; i <= height; i++) {
    var temp = ''
    for(var j = i ; j <= height; j++){
        temp+=' '
    }
    for(var k = 1; k <= i; k++){
        temp+='*'
    }
    for(var l = 1; l <= i-1; l++){
        temp+='*'
    }
    console.log(temp);
}

for (var i = 2; i <= height; i++) {
    var temp = ''
    for(var j = 1 ; j <= i; j++){
        temp+=' '
    }
    for(var k = i ; k <= height; k++){
        temp+='*'
    }
    for(var k = i ; k <= height-1; k++){
        temp+='*'
    }
    console.log(temp);
}