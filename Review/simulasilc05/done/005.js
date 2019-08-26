/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*
---------------
Students Report
---------------
PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:
[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]
Data di atas merupakan campuran seluruh nilai student dari kelas manapun.
Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:
[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]
Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  var kelas = [];
  for (let i = 0; i < studentGrades.length; i++) {
    var boleaan = false;
    var temp = [];
    for (let j = 0; j < kelas.length; j++) {
      if (studentGrades[i].classCode === kelas[j][0]) {
        boleaan = true;
      }
    }
    if (boleaan === false) {
      temp.push(studentGrades[i].classCode);
      kelas.push(temp);
    }
  }
  var result = [];
  for (let i = 0; i < kelas.length; i++) {
    var obj = {
      classCode: kelas[i].toString(),
      passed: [],
      failed: []
    };
    for (let k = 0; k < studentGrades.length; k++) {
      if (studentGrades[k].classCode === obj.classCode) {
        if (studentGrades[k].score >= 70) {
          obj.passed.push(studentGrades[k].name);
        } else {
          obj.failed.push(studentGrades[k].name);
        }
      }
    }
    result.push(obj);
  }
  return result;
}
var grades1 = [
  { name: "John", score: 80, classCode: "A" },
  { name: "Mike", score: 60, classCode: "B" },
  { name: "Budi", score: 70, classCode: "C" },
  { name: "Siti", score: 50, classCode: "A" },
  { name: "Aaron", score: 10, classCode: "A" },
  { name: "Arthur", score: 10, classCode: "C" },
  { name: "Osass", score: 10, classCode: "B" },
  { name: "Yolo", score: 90, classCode: "C" }
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John' ], failed: [ 'Siti', 'Aaron' ] },
  { classCode: 'B', passed: [], failed: [ 'Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur' ] },
]
*/
