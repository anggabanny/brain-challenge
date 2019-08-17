function countSmileys(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] == ':)' || arr[i] == ':D' || arr[i] == ';)' || arr[i] == ';D') {
            count++
        } else if (arr[i] == ':-D' || arr[i] == ':-)' || arr[i] == ';-D' || arr[i] == ';-)'){
            count++
        } else if (arr[i] == ':~D' || arr[i] == ':~)' || arr[i] == ';~D' || arr[i] == ';~)'){
            count++
        } else if (arr[i] == ': D' || arr[i] == ': )' || arr[i] == '; D' || arr[i] == '; )'){
            count++
        }
    }
    return count
}

console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));