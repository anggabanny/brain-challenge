function removeDuplicateWords(s) {
    // your perfect code...
    var sNew = s.split(' ')
    var output = []

    for(var i = 0; i < sNew.length; i++){
        if (output.indexOf(sNew[i]) == -1) {
            output.push(sNew[i])
        }
    }
    return output.join(' ')
}

    function removeDuplicateWords(s) {
        // your perfect code...
        var sNew = s.split(' ')
        var output = []

        for(var i = 0; i < sNew.length; i++){
            if (!output.includes(sNew[i])) {
                output.push(sNew[i])
            }
        }
        return output.join(' ')
    }
    
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
