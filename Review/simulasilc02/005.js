/*

=======================
Initial Object Grouping
=======================

[INSTRUCTION]

Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.


[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama

{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}

[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex

*/

// function initialObjectGrouping(studentsArr) {
//   var sameName = [];
//   for (let i = 0; i < studentsArr.length; i++) {
//     var bolean = false;
//     var temp = []
//     for (let j = 0; j < sameName.length; j++) {
//       if (studentsArr[i][0] === sameName[j][0][0]) {
//         sameName[j].push(studentsArr[i]);
//         bolean = true;
//       }
//     }
//     if (bolean === false) {
//       temp.push(studentsArr[i])
//       sameName.push(temp);
//       console.log(sameName)
//     }
//   }
  // obj = {};
  // for (let i = 0; i < sameName.length; i++) {
  //   obj[sameName[i][0][0]] = sameName[i];
  // }
  // return obj
// }

function initialObjectGrouping(studentsArr) {
  var tempStudents = [ [] ];
    var indeks = 0;
    studentsArr.sort();
    tempStudents[0].push(studentsArr[0]);
    for (var i = 1; i < studentsArr.length; i++) {
      if (studentsArr[i][0] === tempStudents[indeks][0][0]) {
        tempStudents[indeks].unshift(studentsArr[i]);
      } else {
        indeks++;
        tempStudents[indeks] = [studentsArr[i]];
      }
    }
    obj = {};
  for (let i = 0; i < tempStudents.length; i++) {
    obj[tempStudents[i][0][0]] = tempStudents[i];
  }
  return obj
}

console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/