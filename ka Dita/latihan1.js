function Split(data , parameter){
    var arr = []
    var temp = ''
    for(var i = 0 ; i < data.length; i++){
        if (data[i] == parameter) {
            arr.push(temp)
            temp = ''
        } else if(data[i] !== '-') {
            temp+=data[i]
        }
    }
    arr.push(temp)
    return arr
}

function tugOfWar(games) {
    var arr = Split(games, 'V')

    var playerOne = 0
    var playerTwo = 0
    for(var i = 0 ; i < arr.length; i++){
        for(var j = 0 ; j< arr[i].length; j++){
            if (i == 0) {
                switch (arr[i][j]) {
                    case 'A':{ playerOne += 1 ;break;}
                    case 'B':{ playerOne += 2 ;break;}
                    case 'C':{ playerOne += 3 ;break;}
                }
            } else if (i == 1) {
                switch (arr[i][j]) {
                    case 'A':{ playerTwo += 1 ;break;}
                    case 'B':{ playerTwo += 2 ;break;}
                    case 'C':{ playerTwo += 3 ;break;}
                }
            }
        }
    }
    
    if (playerOne == 0 && playerTwo == 0) {
        return 'NO PLAYER'
    }

    if (playerOne > playerTwo) {
        return 'Team Kiri Menang!'
    } else if(playerOne < playerTwo) {
        return 'Team KANAN Menang!'
    } else if (playerOne == playerTwo){
        return 'DRAW'
    }
}
console.log(tugOfWar('ABCA--V--ABCC')); // "Team KANAN Menang!"
console.log(tugOfWar('CC--V--AAAA')); // "Team Kiri Menang!"
console.log(tugOfWar('BBBB--V--CCC')); // "Team KANAN Menang!"
console.log(tugOfWar('AAAA--V--CA')); // 'DRAW'
console.log(tugOfWar('--V--')); // 'NO PLAYERS'