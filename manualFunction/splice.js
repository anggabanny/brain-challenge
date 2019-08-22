function splice(data, awal, akhir, tambah){
    var temp = []
    console.log(data[awal]);
    for(var i = 0 ; i < data.length; i++){
        if (i == awal) {
            if (tambah.length != 0) {
                temp.push(tambah)
                if (akhir == 0) {
                    temp.push(data[i])
                } else {
                    i = akhir
                }
            }
        } else {
            temp.push(data[i])
        }
    }
    return temp
}
console.log(splice(['angga','banny','ridwan','syahputra'], 1,0,'GOODGAME!'));
