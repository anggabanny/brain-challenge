/**
Even Pairs Sum
--------------
Implementasikan function `evenPairsSum` yang akan menjumlahkan pasangan-pasangan angka genap yang
ada di dalam `str`.
Contoh
- input: '34102180'
  pasangan: 34, 10, 21, 80
  output: 124
  Karena ada pasangan genap (34, 10, 80) maka akan dijumlahkan
- input: '31913791'
  pasangan: 31, 91, 37, 91
  output: 0
  Karena tidak ada pasangan genap
- input: '2130113'
  pasangan: 21, 30, 11, 32
  output: 62
  Karena ada pasangan genap (30, 32) maka akan dijumlahkan
NOTE: Jika angka terakhir tidak memiliki pasangan, maka pasangkan dengan angka pertama seperti
      pada contoh terakhir
RULES:
 - WAJIB MENGGUNAKAN algoritma/pseudocode, tidak menyertakan algoritma/pseudocode maka codingan dianggap tidak valid
*/
// ALGORITMA
// 1. deklarasikan 'temp' sebagai penampung angka yang nantinya di dampingkan, bentuknya[ARRAY]
// 2. Looping 'str' ke i atau i(0) sampai panjangnya str
// 3. jika index str ke i ditambah 1 sama dengan undefined atau kosong tidak bernilai, maka masukkan nilai 'str' index ke i dengan str index ke 0 untuk 'temp'
// 4. jika index str ke i ditambah 1 itu ada atau bernilai, maka tambahkan 'str' index ke i dan 'str' index ke i ditambah 1 untuk 'temp', lalu i ditambah satu (mengasumsikan i ditambah 2)
// 5. looping 'str' ke i selesai
// 6. deklarasikan 'total' sebagai penampung nilai yang sudah di jumlahkan, dengan nilai 0
// 7. looping 'temp' ke j
// 8. jika temp ke j di modulus 2 sama dengan 0, maka 'total' dijumlah 'temp' ke j
// 9. looping 'temp' ke j selesai
// 10. tampilkan total


function evenPairsSum (str) {
    var temp = []
    for(var i = 0 ; i < str.length; i++){
        if (str[i+1] == undefined) {
            temp.push(str[i] + str[0])
        } else {
            temp.push(str[i] + str[i+1])
            i++
        }
    }
    var total = 0
    for(var i = 0 ; i < temp.length; i++){
        if (Number(temp[i]) % 2 == 0) {
            total+=Number(temp[i])
        }
    }
    return total
}

console.log(evenPairsSum('2044101211')); // 86
console.log(evenPairsSum('33791363')); // 0
console.log(evenPairsSum('23426766201')); // 140
console.log(evenPairsSum('2478201')); // 134