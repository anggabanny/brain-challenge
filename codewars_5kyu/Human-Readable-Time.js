function humanReadable(seconds) {
    // var hari = (Math.floor(Math.floor(seconds/60))/60)/24
    // if (hari < 1) {
    //     hari = hari.toString()
    //     hari = hari[0]
    // }

    var jam = Math.floor(Math.floor(seconds/60)/60)
    if (seconds > 86400 ) {
        jam = Math.floor(seconds/24)%100
    } else if (jam < 10&&jam>=0) {
        jam = '0' + jam
    }
    // console.log(jam);

    var menit = Math.floor(seconds/60) % 60
    if (menit < 10&&menit>=0) {
        menit = '0' + menit
    }
    // console.log(menit);
    
    var detik = seconds%60
    if (detik < 10&&detik>=0) {
        detik = '0' + detik
    }
    // console.log(detik);

    return jam + ':' + menit + ':' + detik
}
console.log(humanReadable(0));
