function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var bayar = 2000;
    
    var output = []
    for(var i = 0 ; i < arrPenumpang.length; i++){
        var ambil = {
            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[0][2]
        }
        
        for(var j = 0 ; j < rute.length; j++){
            if (ambil.naikDari == rute[j]) {
                for(var k = 0 ; k < rute.length; k++){
                    if (ambil.tujuan == rute[k]) {
                        ambil['bayar'] = (k - j)*bayar
                    }
                }
            }
        }
        output.push(ambil)
    }
    return output
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]