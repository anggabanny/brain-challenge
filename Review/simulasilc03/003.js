/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
  // your code here
  if (data.length == 0) {
    return 'No Data'
  }
  data = data.split(',')

  var temp = []
  for(var i = 0 ; i< data.length; i++){
    var obj = {
      name : '',
      score : '',
    }
    var tempS = ''
    for(var j = 0; j < data[i].length; j++){
      if (data[i][j] == ' ') {
        obj.score = Number(tempS)
        break;
      } else if (data[i][j] == ':') {
        obj.name = tempS
        tempS = ''
      } else {
        tempS += data[i][j]
      }
    }
    temp.push(obj)
  }

  for(var i = 0 ; i < temp.length; i++){
    for(var j = 0; j < temp.length-1; j++){
      if(temp[j].score < temp[j+1].score){
        var sementara = temp[j]
        temp[j] = temp[j+1]
        temp[j+1] = sementara
      }
    }
  }
  
  return temp[0].score
}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// // 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// // 175

console.log(highestTopSpeed(''));
// // No data
