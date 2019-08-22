/**
Graduates Count
Implementasikan function graduatesCount untuk menampilkan berapa orang yang lulus berdasarkan
data nilai yang diberikan (`scores`) dengan aturan jika nilai lebih besar atau sama dengan 75
maka orang itu dinyatakan lulus.
Contoh:
- input: [70, 85, 65, 90]
  output: 2 orang lulus
- input: [0, 65, 30, 74]
  output: Tidak ada yang lulus
- input: [90, 100, 76, 85]
  output: Semua lulus
- input: []
  output: Data kosong


ATURAN CODING:
--------------
- Wajib menuliskan pseudocode atau algoritma.
  Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi
  soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan built-in function:
  - .map()
  - .filter()
  - .reduce()

*/
// ALGORITMA
// 1. buat variabel 'lulus' dengan value arry kosong, untuk nampung yang lulus
// 2. looping panjangnya data yang masuk ke function dalam kasus ini looping 'scoress' dengan i
// 3. didalam looping buat kondisi
// 4. jika 'scoress' ke i, valuenya lebh dari sama dengan 75 maka, masukkan 'scorse' ke i ke array 'lulus'
// 5. jika looping selesai, lanjut step selanjutnya
// 6. jika panjang 'scores' adalah 0 maka tampilkan 'Data kosong', jika tidak lanjut
// 7. jika panjang 'scores' sama dengan panjang 'lulus' maka tampilkan 'Semua orang lulus', jika tidak lanjut
// 8. jika panjang 'lulus' adalah 0 maka tampilkan 'tidak ada yang lulus', jika tidak lanjut
// 9. tampilkan panjang data 'lulus' ditambah String ' orang lulus'

function graduatesCount (scores) {
var lulus = []
    for(var i = 0 ; i < scores.length; i ++){
        if (scores[i] >= 75) {
            lulus.push(scores[i])
        }
    }
    if (scores.length == 0) {
        return 'Data Kosong'
    } else if (scores.length == lulus.length) {
        return 'Semua orang lulus'
    } else if (lulus.length == 0){
        return 'Tidak ada yang lulus'
    } else {
        return lulus.length + ' orang lulus'
    }
}

// Test cases

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong
