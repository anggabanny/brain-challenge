/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

// PSEUDOCODE
/*
*/


function sensorSentence ( sentence, words ) {
  // Your code here
  if (sentence.length == 0) {
    return ''
  }
  var temp = []
  var temp1 = ''
  for(var i = 0 ; i < sentence.length; i++){
    if (sentence[i] != ' ') {
      temp1+=sentence[i]
    } else if((sentence[i] == ' ')) {
      temp.push(temp1)
      temp1 = ''
    }
  }
  temp.push(temp1)

  var output = ''
  for(var i = 0 ; i < temp.length; i++){
    if (temp[i] == words) {
      var batas = words.length
      var aste =''
      while(batas > 0){
        aste+='*'
        batas--
      }

      output+=aste + ' '
    } else {
      output+=temp[i] + ' '
    }
  }
  
  return output
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

console.log(sensorSentence('', '')) // ''