function changeMe(arr) {
    var obj = {}
    for(var  i =0 ; i < arr.length; i++){
        
        if (obj[arr[i][0],arr[i][1]] == undefined) {
            obj[arr[i][0]+' '+ arr[i][1]] = {
                Firstname : arr[i][0],
                Lastname : arr[i][1],
                Gender : arr[i][2],
                age :  2019 - arr[i][3]
            }

            if (arr[i][3] == undefined) {
                obj[arr[i][0]+' '+arr[i][1]].age = 'invalid birth Year'
            }
        }
    }
    return obj
}

// TEST CASES
console.log(changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]));