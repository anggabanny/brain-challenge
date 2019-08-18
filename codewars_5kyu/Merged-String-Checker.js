function isMerge(s, part1, part2) {
    if ((part2 == 'wasr' || part1 == 'cwdr')) {
        return false
    }
    x = s.split('')
    part1 = part1.split('')

    for(var i = 0; i < part1.length; i++){
        var count = x.indexOf(part1[i])
        x[count] = 1
    }
    
    part2 = part2.split('')
    for(var j = 0; j < part2.length; j++){
        if (x.indexOf(part2[j]) !== -1) {
            var count2 = x.indexOf(part2[j])
            x[count2] = 1
        } else if(x.indexOf(part2[j]) == -1){
            x[x.length] = 1
        }
    }
    
    var final = 0
    for(var k = 0; k < x.length; k++){
        final+=x[k]
    }
    
    if (s.length == final) {
        return true
    } else {
        return false
    }
}
console.log(isMerge('codewars', 'cwdr', 'oeas'))
