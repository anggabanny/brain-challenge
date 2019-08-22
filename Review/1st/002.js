/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'dimitri', output: 'Masuk group pertama'
- `name` = 'icha', output: 'Masuk group kedua'
- `name` = 'taufik', output: 'Masuk group terakhir'
- `name` = 'sergei', output: 'Masuk group terakhir'

*/

var name = 'icha'; // Isi nama disini

// Code disini
function firsttLetter(name) {
    if (name[0] == 'a' || name[0] == 'b' || name[0] == 'c' || name[0] == 'd') {
        return 'Masuk grup pertama'
    } else if (name[0] == 'e' || name[0] == 'f' || name[0] == 'g' || name[0] == 'h' || name[0] == 'i'){
        return 'Masuk grup kedua'
    } else {
        return 'Masuk grup terakhir'
    }
}

console.log(firsttLetter(name))