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
function SeleksiAsrama(data) {
    var obj = {}
    for(var i = 0 ; i < data.length; i ++){
        if (!obj[data[i].asrama]) {
            obj[data[i].asrama] = {
                jumlahNilai : [data[i].nilai],
                totalNilai : data[i].nilai,
                'hasilRata-rata' : 0
            }
        } else {
            obj[data[i].asrama].jumlahNilai.push(data[i].nilai)
            obj[data[i].asrama].totalNilai += data[i].nilai
        }
    }
    return obj
}

function cariRataRata(data) {
    for(var i in data){
        data[i]['hasilRata-rata'] = Math.round(data[i].totalNilai / data[i].jumlahNilai.length)
    }
}

function cariTerbesar(data) {
    var asrama = ''
    var nilai = 0
    for(var i in data){
        if (data[i]['hasilRata-rata'] > nilai) {
            nilai = data[i]['hasilRata-rata']
            asrama = i
        }
    }
    
    return 'Asrama peringkat pertama adalah '+ asrama + ' dengan nilai rata-rata '+ nilai
}

function rankingAsrama(students) {
    var obj = SeleksiAsrama(students)
    cariRataRata(obj)
    var output = cariTerbesar(obj)

    return output
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
    { nama: 'Angga Banny', nilai: 95, asrama: 'Hacktiv8' },
    { nama: 'Bill Gates', nilai: 90, asrama: 'Hacktiv8' },
    { nama: 'Elon Musk', nilai: 100, asrama: 'Hacktiv8' },
];

console.log(rankingAsrama(data))