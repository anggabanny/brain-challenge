function nameInStr(str, name) {
    name = name.toLowerCase();
    str = str.toLowerCase();
    var temp = ''
    var check = []
    var count = 0
    for(var i = 0; i < name.length; i++){
        var angka = 0
        for(var j = count ; j < str.length ; j++){
            if (name[i] == str[j]) {
                angka = j
                temp+=str[j]
                break;
            }
        }
        count = angka + 1
    }

    if (name == temp) {
        return true
    } else {
        return false
    }
}
console.log(nameInStr('A live son', 'Allison'));
console.log(nameInStr('Across the rivers', 'chris'));
console.log(nameInStr('A crew that boards the ship', 'chris'));//false
console.log(nameInStr( 'nb atfjsiieite cyln jja vyydl ohaay jaexhiawdm  sreykttntaifgbib ljareemetreiseemh ltoj xljlesieostb  am rijy  alcntpi ', 'Ashley' ));
