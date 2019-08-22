function splitFunction(data, separator) {
    var temp = []
    for(var i = 0 ; i < data.length; i++){
        var tempA = []
        var tempS = ''
        for(var j = 0 ; j < data[i].length; j++){
            if(data[i][j] == separator){
                tempA.push(tempS)
                tempS = ''
            } else {
                tempS+=data[i][j]
            }
        }
        tempA.push(tempS)
        temp.push(tempA)
    }

    return temp
}

function convertTitle(data) {
    var split = splitFunction(data, ',')
    var output = []
    for(var i = 0 ; i < split.length; i++){
        if (split[i][2] > 19 && split[i][1] == 'pria') {
            output.push('Tuan. '+split[i][0])
        } else if (split[i][2] > 19 && split[i][2] < 30 && split[i][1] == 'perempuan'){
            output.push('Nona. '+split[i][0])
        } else if (split[i][2] > 30 && split[i][1] == 'perempuan'){
            output.push('Nyonya. '+split[i][0])
        }
    }
    return output
}

var people = ['Harry,pria,21', 'Potter,pria,25', 'Ron,pria,13', 'Weasley,pria,22', 'Hermione,perempuan,77', 'Fleur,perempuan,21', 'Patty,perempuan,19'];
console.log(convertTitle(people)); 
// ['Tuan. Harry', 'Tuan. Potter', 'Tuan.Weasley', 'Nyonya. Hermione', 'Nona.Fleur']
