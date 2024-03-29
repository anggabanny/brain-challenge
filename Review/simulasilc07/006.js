/**
  Vowels Counter Recursive

  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.

- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX

*/

function consonantCounterRecursive(sentences) {
  var num = "1234567890"
  var count = 1
  if (sentences.length == 0) {
    return count = 0
  } else {
      switch (sentences[0].toLowerCase()) {
        case ' ':{ count = 0 ;break;}        
        case 'a':{ count = 0 ;break;}
        case 'i':{ count = 0 ;break;}
        case 'u':{ count = 0 ;break;}
        case 'e':{ count = 0 ;break;}
        case 'o':{ count = 0 ;break;}
      }

      for(var i = 0 ; i < num.length; i++){
        if (sentences[0] == num[i]) {
          count = 0
          break
        }
      }
    
    return count + consonantCounterRecursive(sentences.slice(1))
  }
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3
