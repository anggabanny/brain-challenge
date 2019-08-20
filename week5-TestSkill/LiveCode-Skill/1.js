/*
=====
Hacktiv Mining
=====

[INSTRUCTIONS]
salesAmount adalah fungsi yang mengambil parameter:
    1. array penjualan/sales hasil tambang dari berbagai macam tambang yang dimiliki oleh perusahaan Hacktiv
    2. nama mineral yang ingin diketahui jumlah salesnya dari semua tambang-tambang tersebut.

Fungsi ini akan me-return jumlah pendapatan dari penjualan suatu mineral. 

Berikut ini adalah daftar mineral beserta harga-harganya:
    - sulfur dengan harga 10
    - silver dengan harga 30
    - malachite dengan harga 50
    - gold dengan harga 50
    - diamond dengan harga 100

[EXAMPLE]
INPUT : 
- hasil tambang: [['silver','silver','gold'], ['gold','malachite']]
- mineral yang dicari nilai penjualannya: gold

PROSES:
1. Ada 2 tambang, tambang pertama menghasilkan [silver,silver,gold] dan tambang kedua menghasilkan [gold,malachite]
2. Di semua tambang perusahaan Hacktiv, terdapat 2 biji hasil tambang gold.
3. Harga gold adalah 50, jadi hasil penjualan gold adalah 2 ⨉ 50 = 100

OUTPUT:
100

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin

*/
// ALGORITMA
// 1. buat sebuah function yang nerima dua parameter contoh A dan B
// 2. buat 'Total' dengan nilai 0
// 3. lakukan lo0ping i ke panjangnya index A
// 4. lakulan looping lagi didalam looping i, yaitu J ke index i dari A
// 5. buat pengondisian apabila A ke i ke j itu sama dengan B
// 6. maka buat switch case untuk menentukan pilihan yang sesuai dengan apa yang diminta
// 7. dalam kasus ini lakukan penumlahan kepada 'Total' sesuai dengan kondisi dan switch case
// 8. ketika loopingnya sudah berakhir maka
// 9. tampilkan 'Total'


// Write the function here
function salesAmount(satu, dua) {

  var total = 0
  for(var i = 0 ; i < satu.length; i++){
    for(var j = 0 ; j < satu[i].length; j++){
      if (satu[i][j] == dua) {
        switch (dua) {
          case 'sulfur':{ total += 10 ;break;}
          case 'silver':{ total += 30 ;break;}
          case 'malachite':{ total += 50 ;break;}
          case 'gold':{ total += 50 ;break;}
          case 'diamond':{ total += 100 ;break;}
        }
      }
    }
  }
  return total
}

var tambangA = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold']
]
console.log(salesAmount(tambangA, 'gold')); // 200

var tambangB = [
  ['gold', 'gold', 'gold', 'diamond', 'diamond', 'sulfur'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
  ['sulfur', 'sulfur', 'sulfur', 'diamond', 'diamond', 'gold'],
]
console.log(salesAmount(tambangB, 'diamond')); // 600

var tambangC = [
  [],
  ['sulfur', 'sulfur', 'silver', 'gold'],
  ['gold', 'diamond']
]
console.log(salesAmount(tambangC, 'sulfur')) // 20
