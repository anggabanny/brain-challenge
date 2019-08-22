/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikkan nilai string yang merupakan pemenang perlombaan.
[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]
PROCESS: 
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.
OUTPUT: pemenangnya adalah toni
[NOTES]
  1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
  2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya
[RULES]
  1. Dilarang menggunakan built in function .sort()
*/

function warOfFun(informations) {
    console.log(informations);
    var input = {}
    for(var i = 0; i < informations.length; i++){
        for(var j = 0 ; j< informations[i].length; j++){
            if (input[informations[0][j]] == undefined) {
                input[informations[0][j]] = []
            } else if(informations[i][j] == 'fun') {
                input[informations[0][j]].push(informations[i][j])
            }
        }
    }

    var check = 0
    var name = []
    var count = 0
    for(var i in input){
        if (input[i].length > count) {
            name = name.slice(1)
            name.push(i)
            count = input[i].length
            check = 0
        } else if (count == input[i].length){
            name.push(i)
            check++
        }
    }
    if (count == 0) {
        return 'mohon maaf tidak ada pemenangnya'
    } else if (check !== 0){
        return 'hasil imbang antara ' + name[0] + ' dan ' + name[name.length-1]
    }
    return 'pemenangnya adalah ' + name[0]
}

console.log(warOfFun([
    ['andre', 'toni', 'toti'],
    ['bgh', 'fun', 'asd'],
    ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
    ['andre', 'toni', 'toti', 'tito'],
    ['fun', 'fun', 'fun'],
    ['fun', 'fun'],
    ['nonfun', 'fun', 'fun', 'fun']
]))
// pemenangnya adalah toni

console.log(warOfFun([
    ['andre', 'toni'],
    ['risk', 'go'],
    ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya