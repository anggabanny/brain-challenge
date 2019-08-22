function changeMe(arr) {
    if (arr.length === 0) {
        console.log('');
    }

    for(var i = 0; i < arr.length; i ++){
        var temp = ''
        temp+= i+1 +'. ' + arr[i][0] +' '+ arr[i][1]
        var name = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
        }
        if (arr[i][3] == undefined) {
            name.age = 'Invalid Birth Year' 
        } else{
            name.age =  2019-arr[i][3] 
        }
        console.log(temp);
        console.log(name);
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""