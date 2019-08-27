/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.
Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan
Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
// ALGORITMA
// 1. deklarasikan 'Villain' dengan nilai 0
// 2. deklarasikan 'jebakan' dengan nilai 3
// 3. looping panjangnya 'array' atau i(0) ke panjangnya array
// 4. jika 'array' ke i  sama dengan '@' atau jebakan, maka 'jebakan' kurang 1
// 5. jika 'array' ke i  sama dengan 'Villain' atau penjahat DAN 'jebakan' lebih dari 0, maka 'Villain' ditambah 1
// 6. LOPPING 'array' ke i SELESAI
// 7. jika 'jebakan' lebih dari 0, maka tampilkan 'Nice work, detective! You got all villains: ' ditambah jumlah 'penjahat'
// 8. jika 'jebakan' kurang dari sama dengan 0, maka tampilkan 'Ooops, you die. You got ' ditambah jumlah 'penjahat' ditambah string ' Villain'



function game(data) {
  var penjahat = 0
  var jebakan = 3
  for(var i = 0 ; i < data.length; i++){
    if (data[i] == '@') {
      jebakan--
    } else if (data[i] == 'Villain' && jebakan >0){
      penjahat++
    }
  }
  if (jebakan > 0) {
    return 'Nice work, detective! You got all villains: ' +  penjahat
  } else {
    return 'Ooops, you die. You got ' + penjahat + ' Villain'
  }
}
console.log(game(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']));
console.log(game(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@', 'Villain']));