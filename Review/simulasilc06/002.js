/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut.
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!

/*
PSEUDOCODE
STORE 'output' equal to nol
STORE 'counter' equal to one
STORE 'kali' equal to nol
STORE 'selisih' equal to noll
STORE 'tamp' equal to array blank

WHILE 
    IF length arrOperand1 greater than arrOperand2
      THEN add array '0' to arrOperand2 based on 'selisih'
    IF length arrOperand1 less than arrOperand2
      THEN add array '0' to arrOperand1 based on 'selisih'
SET i=0
WHILE i less than length of arrOperand1
   STORE 'kali' with arrOperand1[i] times arrOperand2[i]
      IF 'kali' modulus 2 not equal 0 
          THEN STORE  'counter' times counter[i]
          THEN SET output with counter
DISPLAY output


*/
function multiplyTheOdds(arrOperand1, arrOperand2) {
  // your code here

}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
// console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
// console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
// console.log(multiplyTheOdds([], [])); //0
