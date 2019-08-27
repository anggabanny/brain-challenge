function push(item) {
    var tambah = 'ridwan'
    item[item.length] = tambah
    return item
}
console.log(push(['angga','banny']));

var nama = ['a','b','c','d','e','f']
var temp = ['a','n','g','g','a']
for(var i = 0 ; i < temp.length; i++){
    nama[nama.length] = temp[i]
}
console.log(nama);
