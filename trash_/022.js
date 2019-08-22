var height = 3;

var count = 1
for(var i = 1 ; i <= height; i++){
    var temp = ''
    for(var j = 1 ; j <= height; j++){
        if (count % 3 == 0) {
            temp += ' * '
        } else if (count % 2 == 1) {
            temp += ' @ '
        } else {
            temp += ' $ '
        }
        count++
    }
    console.log(temp);
}
// @ $ *
// $ @ *
// @ $ *

// @ kelipatan ganjil
// $ kelipatan genap
// * baris ganjil kelipatan 3