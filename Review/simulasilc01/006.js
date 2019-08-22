/*
----------------------------------
Count Distance Letter Recursively
----------------------------------
PROBLEM
========
Tersedia 2 input: suatu kata dan suatu huruf
Hitunglah jarak dari huruf pertama hingga huruf yang dicari
Gunakan rekursif untuk menyelesaikan soal ini.


ASUMSI:
1. Huruf yang dicari pasti ada di kata/kalimat tersebut
2. Hitung jarak huruf yang dicari saat pertama kali ditemukan


Contoh                      
1) sentence = 'the quick brown fox', letter = 'o'    -->     13
                           ^
              123456789012[3]4567890
2) sentence = 'i love javascript', letter = 't' -->

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function countDistanceLetterRecursive
- Dilarang mengubah tipe data parameter
- Dilarang menggunakan looping (while, for, do-while, dan lain-lain)
*/

function countDistanceLetterRecursive(sentence, letter) {
for (let i=0; i<sentence.letter; i++){
    if (sentence[i]===letter){
        var res = i
    }
}
return res
}
//                                        12345678901234567890
console.log(countDistanceLetterRecursive('12104123', '1')); // 1
console.log(countDistanceLetterRecursive('the quick brown fox', 'o')); // 13
console.log(countDistanceLetterRecursive('hahaha', 'a')); // 

