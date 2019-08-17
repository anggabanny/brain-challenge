var test1 = '1234567890'
// with build in function
    console.log(test1.split('').sort(function(a,b){return b-a}).join(''));

// with logic
    var temp = []
    for(var i = 0; i < test1.length; i++){
        temp.push(test1[i])
    }
    console.log(temp);
    

    for(var i = 0; i < temp.length; i++){
        for(var j = 0; j < temp.length; j++){
            if (temp[j] < temp[j+1]) {
                var tamp = temp[j]
                temp[j] = temp[j+1]
                temp[j+1] = tamp
            }
        }
    }
    console.log(temp);

    var output = ''
    for(var i = 0; i < temp.length;i++){
        output+=temp[i]
    }
    console.log(output);