function list(names) {
    if (names.length == 1) {
        return names[0].name
    } else if (names.length == 0){
        return ''
    }
    var temp = ''
    for(var i = 0; i < names.length; i++){
        if (i == names.length-1) {
            temp+= ' & ' + names[i].name
        } else if (i == names.length-2){
            temp+=names[i].name
        } else {
            temp+=names[i].name + ', '
        }
    }
    return temp
}
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
//  'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{name: 'Bart'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
console.log(list([]));