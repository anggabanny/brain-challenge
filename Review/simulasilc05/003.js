/*

==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

/* PSEUDOCODE

STORE COUNTER WITH 0
STORE COUNTERDALAM WITH 0
STORE RESULT WITH []
STORE CONDITION WITH true

WHILE COUNTER < ARR1.Length
  STORE CONDITION WITH true
    WHILE COUNTERDALAM < ARR2.Length
      IF ARR1[COUNTER] == ARR2[COUNTERDALAM]
        STORE CONDITION WITH false
      DO COUNTERDALAM = COUNTERDALAM +1

  IF CONDITION == true
  PUSH RESULT WITH ARR1[COUNTER]
  DO COUNTER = COUNTER +1


RETURN RESULT
*/

function findNotRelative(arr1, arr2) {
  
}

console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]
