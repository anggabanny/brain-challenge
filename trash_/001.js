var obj = [
    { number : 9,},
    { number : 1,},
    { number : 4,},
    { number : 2,},
]

function sort(arr){
    console.log(arr);
    for(var i = 0; i < arr.length; i ++){
        for(var j = 0; j < arr.length-1; j++){
            if(arr[j].number > arr[j+1].number){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr);
}
console.log(sort(obj));