function join(data, parameter) {
    var temp = ''
    for(var i = 0 ; i < data.length; i++){
        if (i == data.length-1) {
            temp+=data[i]
        } else {
            temp+=data[i]
            temp+=parameter
        }
    }
    return temp
}
console.log(join(['a','n','g','g','a',' ', 'b','a','n','n','y'], '!'));
console.log(join('tomas muller', ':'));

