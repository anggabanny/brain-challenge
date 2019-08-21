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


// Write the function here








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
