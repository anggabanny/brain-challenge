/*
============
rankingAsrama
============

rankingAsrama adalah sebuah fungsi yang menerima parameter berupa array of object dengan format:

[
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
  ...
]

Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.

Function akan mengeluarkan output informasi asrama dengan peringkat pertama berdasarkan nilai rata-rata penghuninya.


[EXAMPLE]

* INPUT *
[
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

* PROCESS *
Setelah menghitung rata-rata dari setiap asrama diperoleh data
- Griffindo memperoleh rata-rata 47
- Ravenclaw memperoleh rata-rata 35
- Slyterin memperoleh rata-rata 57
Jadi asrama dengan rata-rata tertinggi adalah Slyterin

* OUTPUT *
Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57


[NOTES]
  - angka rata-rata dibulatkan keatas.
  - Diasumsikan tidak ada asrama dengan rata-rata nilai yang sama.

*/

function rankingAsrama(students) {
  var griffindorTotal = 0
  var ravenclawTotal = 0
  var slyterinTotal = 0

  var tampung = {}
  for(var i = 0 ; i < students.length; i ++){

    if (students[i].asrama == 'Griffindor') {
      griffindorTotal += students[i].nilai
    } else if (students[i].asrama == 'Ravenclaw') {
      ravenclawTotal += students[i].nilai
    } else if (students[i].asrama == 'Slyterin') {
      slyterinTotal += students[i].nilai
    }

    if (tampung[students[i].asrama] == undefined) {
      tampung[students[i].asrama] = []
      tampung[students[i].asrama].push(students[i].nama)
    } else {
      tampung[students[i].asrama].push(students[i].nama)
    }
  }

  griffindorTotal = Math.round(griffindorTotal / tampung['Griffindor'].length)
  ravenclawTotal = Math.round(ravenclawTotal / tampung['Ravenclaw'].length)
  slyterinTotal = Math.round(slyterinTotal / tampung['Slyterin'].length)
  
  if (griffindorTotal > ravenclawTotal && griffindorTotal > slyterinTotal) {
    return 'Asrama peringkat pertama adalah Griffindor dengan nilai rata-rata ' + griffindorTotal
  } else if (ravenclawTotal > griffindorTotal && ravenclawTotal > slyterinTotal) {
    return 'Asrama peringkat pertama adalah Ravenclaw dengan nilai rata-rata ' + ravenclawTotal
  } else if(slyterinTotal > griffindorTotal && slyterinTotal > ravenclawTotal){
    return 'Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata '+ slyterinTotal
  }
}

var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

console.log(rankingAsrama(data)) // Asrama peringkat pertama adalah Slyterin dengan nilai rata-rata 57