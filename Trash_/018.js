function sort1(data) {
    var arr = []
    var temp = ''
    for(var i = 0 ; i < data.length; i++){
        if (data[i] == ',') {
            arr.push(temp)
            temp = ''
        } else{
            temp+= data[i]
        }
    }
    arr.push(temp)
    return arr
}

function sort2(data) {
    var temp = []
    for(var i = 0 ; i < data.length; i++){
        var tempArr = []
        var tempS = ''
        for(var j = 0 ; j < data[i].length; j++){
            if (data[i][j] == '-') {
                tempArr.push(tempS)
                tempS = ''
            } else {
                tempS+=data[i][j]
            }
        }
        tempArr.push(tempS)
        temp.push(tempArr)
    }
    return temp
}

function obj1(data) {
    var obj = {}
    for(var i = 0 ; i < data.length; i++){
        if (!obj[data[i][1]]) {
            obj[data[i][1]] = []
            obj[data[i][1]].push(data[i][0])
        } else {
            obj[data[i][1]].push(data[i][0])
        }
    }
    return obj
}

function final(object) {
    var arr = [[],[]]
    for(var i in object){
        if (i == 'Ranged') {
            for(var j = 0 ; j < object[i].length; j++){
                arr[0].push(object[i][j])
            }
        } else if (i == 'Melee') {
            for(var j = 0 ; j < object[i].length; j++){
                arr[1].push(object[i][j])
            }
        }
    }
    return arr
}

function meleeRangedGrouping(str) {
    if (str.length == 0) {
        return []
    }
    
    var sortSatu = sort1(str)
    var sortDua = sort2(sortSatu)
    var object = obj1(sortDua)
    
    return final(object)
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []