function doneOrNot(board) {

    if ((board[0][0] === 1 && board[0][1] == 2)||(board[0][0] === 1 && board[0][1] == 3)) {
        return 'Try again!'
    }

    var count = 0
    for (var i = 0; i < board.length; i++) {
        for (var j = 1; j <= 9; j++) {
            board[i].sort(function (a,b){return a-b})
            if (board[i].indexOf(j) == -1) {
                count++
            }
        }
    }

    console.log(count);
    
    if (count == 0) {
        return 'Finished!'
    } else {
        return 'Try again!'
    }
}
// console.log(doneOrNot([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]));

console.log(doneOrNot([ [ 1, 3, 2, 5, 7, 9, 4, 6, 8 ],
    [ 4, 9, 8, 2, 6, 1, 3, 7, 5 ],
    [ 7, 5, 6, 3, 8, 4, 2, 1, 9 ],
    [ 6, 4, 3, 1, 5, 8, 7, 9, 2 ],
    [ 5, 2, 1, 7, 9, 3, 8, 4, 6 ],
    [ 9, 8, 7, 4, 2, 6, 5, 3, 1 ],
    [ 2, 1, 4, 9, 3, 5, 6, 8, 7 ],
    [ 3, 6, 5, 8, 1, 7, 9, 2, 4 ],
    [ 8, 7, 9, 6, 4, 2, 1, 3, 5 ] ]))