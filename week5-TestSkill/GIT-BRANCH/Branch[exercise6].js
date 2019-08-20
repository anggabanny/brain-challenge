function meleeRangedGrouping(str) {

    if (str.length == 0) {
        return []
    }
    str = str.split(',')

    var final = []
    for(var i = 0; i < str.length; i ++){
        var split = str[i].split('-')
        final.push(split)
    }
    
    var output = {}
    for(var i = 0; i < final.length; i++){
        if (output[final[i][1]] == undefined) {
            output[final[i][1]] = [final[i][0]]
        } else {
            output[final[i][1]].push(final[i][0])
        }
    }

    var count = 0
    var arrReal = []
    for(var i in output){
        count++
        arrReal.push(output[i])
    }
    
    if (count == 1) {
        arrReal.push([])
        return arrReal
    } else {
        return arrReal
    }
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []