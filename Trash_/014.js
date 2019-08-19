function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

function sorting(arrNumber) {
    var output = arrNumber.sort(function(a,b){return a-b})
    return output
}

function getTotal(arrNumber) {
    if (arrNumber.length == 0) {
        return ''
    }
    var count = 0;
    var angka = arrNumber[arrNumber.length-1]
    for(var i = 0 ; i < arrNumber.length; i ++){
        if (arrNumber[i] == angka) {
            count++
        }
    }
    return 'angka paling besar adalah ' + angka + ' dan jumlah kemunculan sebanyak ' + count + ' kali'
}


console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
// //''