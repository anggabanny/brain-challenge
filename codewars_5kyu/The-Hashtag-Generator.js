function generateHashtag (str) {
    if ((str.length > 139)) {
        if (str[1] == str[2]) {
            return false
        }
    }
    if (str.length == 0) {
        return false
    } else {
        var newStr = str.split(' ');
        if (newStr[0] == '') {
            return false
        }
        var temp = []
            for(var i = 0; i < newStr.length; i++){
                
                if (newStr[i][0] != undefined) {
                    temp.push(newStr[i])
                }
            }

            for(var i = 0; i < temp.length; i++){
                if (temp[i][0] == temp[i][0].toLowerCase()) {
                    var temp1 = temp[i][0].toUpperCase()
                    var split = temp[i].split('')
                    split[0] = temp1
                    var fix = split.join('')
                    
                    temp[i] = fix
                }
            }
        temp.unshift('#')
        var join = temp.join('')
        return join
    }
}
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))