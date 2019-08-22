function nameInStr(str, name) {
    var temp = ''
    console.log(str);
    for(var i = 0; i < name.length; i++){
        console.log(name[i]);
        for(var j = 0 ; j < str.length; j++){
            if (name[i] == str[j]) {
                temp+=str[j]
                str = str.replace(str[i],'');
                break;
            }
        }
    }
    console.log(str);
    console.log(temp);
    
    if (name == temp) {
        return true
    } else {
        return false
    }
}
// console.log(nameInStr('A live son', 'Allison'));
// console.log(nameInStr('Across the rivers', 'chris'));
console.log(nameInStr('A crew that boards the ship', 'chris'));//false
