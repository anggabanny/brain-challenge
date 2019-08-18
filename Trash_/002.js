function highestScore(x) {
    var temp = {}
    var temp1 = []
    for(var i = 0; i < x.length; i ++){
        if (temp[x[i].class] == undefined) {
            temp[x[i].class] = []
        }
        temp1.push(x[i].name)
        temp1.push(x[i].score)
        temp[x[i].class].push(temp1)
        temp1 = []
    }

    console.log(temp);
    console.log(temp1);
}


console.log(highestScore([{
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
},
{
    name: 'Alexei',
    score: 85,
    class: 'wolves'
},
{
    name: 'Sergei',
    score: 74,
    class: 'foxes'
},
{
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
}
]));