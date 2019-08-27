
/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.
RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()
*/
function splitManual(data, parameter){
  var temp = []
  var string = ''
  for(var i = 0 ; i < data.length; i++){
    if (data[i] == parameter) {
      temp.push(string)
      string = ''
    } else {
      string+=data[i]
    }
  }
  temp.push(string)

  return temp
}

function fastestClimber (string) {
  var splitComma = splitManual(string,',')

  var satu = []
  for(var i = 0 ; i < splitComma.length; i++){
    var splitDoubleDot = splitManual(splitComma[i], ' ')
    satu.push(splitDoubleDot)
  }

  var bersih = []
  for(var i = 0 ; i < satu.length; i++){
    var temp = []

    var SatuS = satu[i][0].split('').reverse().splice(1).reverse().join('')
    var DuaS = satu[i][1].split('').reverse().splice(3).reverse().join('')
    var TigaS = satu[i][2].split('').reverse().splice(5).reverse().join('')
    temp.push(SatuS)
    if (DuaS == 0) {
      temp.push(Number(TigaS))
    } else {
      temp.push(Number(DuaS+TigaS))
    }

    bersih.push(temp)
  }

  for(var i = 0 ; i < bersih.length; i++){
    for(var j = 0 ; j < bersih.length-1; j++){
      if(bersih[j][1] > bersih[j+1][1]){
        var sementara = bersih[j]
        bersih[j] = bersih[j+1]
        bersih[j+1] = sementara
      }
    }
  }
  
  return bersih[0][0]
}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian
