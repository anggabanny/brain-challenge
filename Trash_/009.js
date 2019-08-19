/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah andre
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/
/*
1. di cek dulu apakah 'stringData' punya value atau engga, kalau punya lanjut ke langah 3, kalau engga ke langkah 2
2. tampilkan 'tidak ada catatan emoney'
3. pisahkan 'stringData' dari koma(','), dan juga titikDua(':'), dan tampung di variable ARRAY baru, menjadi array multidimensi
4. gunakan bubblesort untuk mengurutkan index terkecil hingga terbesar
5. tampilkan terkecil dengan indexke 0 dan ke 0 untuk mengambil nama
6. tampilkan terbesar dengan index ke jumlah panjangnya array tersebut (variable.length -1), untuk mengambil index terakhir, dan index ke 0 untuk mengambil nama
*/

function eMoneySplit(stringData) {
    // code below here  // code below here
    if (stringData.length == 0) {
        return 'tidak ada catatan eMoney'
    }
    stringData = stringData.split(',')
    var temp1 = []
    for(var i = 0; i < stringData.length; i++){
        var temp = []
        var temp2 = ''
        for(var j = 0; j < stringData[i].length; j++){
            if (stringData[i][j] == ':') {
                temp.push(temp2)
                temp2 = ''
            } else {
                temp2+=stringData[i][j]
            }
        }
        temp.push(temp2)
        temp1.push(temp);
    }

    for(var i = 0; i < temp1.length; i++){
        for(var j = 0; j < temp1.length-1; j++){
            if (temp1[j][1] > temp1[j+1][1]) {
                var tamp = temp1[j]
                temp1[j] = temp1[j+1]
                temp1[j+1] = tamp
            }
        }
    }

    return 'terbanyak adalah ' + temp1[temp1.length-1][0] + ' dan tersedikit adalah '+ temp1[0][0]
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney