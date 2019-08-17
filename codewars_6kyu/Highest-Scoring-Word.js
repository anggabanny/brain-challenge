function high(x){
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var location = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
    // console.log(alphabet.indexOf('z'))
    
    var input = x.split(' ')
    var output = []
    for(var i = 0 ; i < input.length; i++){
        var temp = 0;
        for(var j = 0; j < input[i].length; j++){
            for(var k = 0 ; k < alphabet.length; k++){
                if (input[i][j] == alphabet[k]) {
                    temp += location[k]
                }
            }
        }
        output.push([input[i],temp])
    }

    console.log(output);
    

    for(var a = 0; a < output.length; a++){
        for(var b = 0 ; b < output.length-1; b++){
            if (output[b][1] > output[b+1][1] ) {
                var tempo = output[b]
                output[b] = output[b+1]
                output[b+1] = tempo

            }
        }
    }
    console.log(output);
    if (output[output.length-1][1] == output[output.length-2][1]) {
        return output[output.length-2][0]
    } else {
        return output[output.length-1][0]
    }
}

console.log(high('sfbvffl syoblvk okyvgqi zbmqjnh'));
