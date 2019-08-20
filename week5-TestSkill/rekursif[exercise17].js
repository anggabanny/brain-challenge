function kaliTerusRekursif(angka) {
    angka = angka.toString()
    if (angka.length == 1) {
        return Number(angka)
    } else {
        var temp = 1
        for(var i = 0; i < angka.length; i++){
            temp *= Number(angka[i])
        }
        return kaliTerusRekursif(temp)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6