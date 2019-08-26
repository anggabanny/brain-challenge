/*
================
Format Uang (KBBI)
================

[INSTRUCTIONS]

formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00

[RULE]
- Wajib menggunakan Pseudocode/Algoritma
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
formatUang(2000)

output: Rp2.000,00
*/

// PSEUDOCODE
/*

*/
function formatUang(number) {
  //code here
  number = number.toString()
  var outputArr = []
  var temp = ''
  for(var i =  number.length-1 ; i >=0; i--){
    if (temp.length == 3) {
      outputArr.unshift(temp)
      temp=''
      temp+=number[i]
    } else {
      temp+=number[i]
    }
  }
  outputArr.unshift(temp)

  var temp = 'Rp'
  for(var i = 0 ; i < outputArr.length; i++){
    outputArr[i] = outputArr[i].split('').reverse().join('')
    if (outputArr[i] !== outputArr[outputArr.length-1]) {
      temp+=outputArr[i] +'.'
    } else {
      temp+=outputArr[i] +','
    }
  }
  temp+='00'

  return temp
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00
