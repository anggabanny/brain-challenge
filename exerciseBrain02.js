var text = 'angga banny'
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var location = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

var text1 = text.split(' ')
console.log(text1);
var output = []
for(var i = 0; i < text1.length;i++){
    console.log(text1[i]);
    var temp = 0
    for(var j = 0 ; j < text1[i].length; j++){
        for(var k = 0; k < alphabet.length; k++){
            if (text1[i][j] == alphabet[k]) {
                temp += location[k]
            }
        }
    }
    output.push(temp)
    console.log(temp);
}

output.sort(function(a,b){return b-a})
console.log(output[output.length-1]);


