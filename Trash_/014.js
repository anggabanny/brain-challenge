function buat(satu,dua) {
    satu = satu.split('').sort().join('')
    var temp = []
    for(var i = 0; i < dua.length; i++){
        var gagu = dua[i].split('').sort().join('')
        if (satu == gagu) {
            temp.push(dua[i])
        }
    }

    console.log(temp);
    console.log(satu);
    console.log(dua);
}
console.log(buat('angga',['bnghf','nggaa','ngaga','lkhsj']));
