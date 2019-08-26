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

STORE `nyawa` with number 3
STORE `penjahat` with number 0
STORE `counter` with number 0

STORE `list` with Array
WHILE(`counter` less than index of `list`) DO
  IF `list` index `counter` == '@' DO
    SET and STORE `nyawa` = `nyawa` - 1
  END

  IF `list` index `counter` == 'Villain' DO
    SET and STORE `penjahat` = `penjahat` + 1
  END IF

  SET and STORE `counter` = `counter` + 1
END WHILE

IF `nyawa` less than or equal 0 DO
  DISPLAY "Ooops, you die. You got " append `penjahat` append "villains"
ELSE
  DISPLAY "Nice work, detective! You got all villains: " append `penjahat`
END IF
