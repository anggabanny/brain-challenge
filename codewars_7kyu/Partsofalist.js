function partlist(arr){
    var final = []
    var awal = ''
    var akhir = ''
    for(var i = 1; i < arr.length; i++){
        awal = arr.slice(0, i).join(' ')
        akhir = arr.slice(i).join(' ')
        final.push([awal,akhir])
    }
    return final
}
console.log(partlist(["I", "wish", "I", "hadn't", "come"]));