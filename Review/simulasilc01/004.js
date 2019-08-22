function deleteNth(arr, n){
  var object = {};
  var ansArr = [];
  for(var i=0; i<arr.length; i++){
    if(object[arr[i]]){
      object[arr[i]] += 1;
    }else{
      object[arr[i]] = 1;
    }
    if(object[arr[i]] <= n){
      ansArr.push(arr[i]);
    }
  }
  return ansArr;
}
deleteNth ([1,1,1,1],2) // return [1,1]
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 

*/

function initialGroupingDescending(studentsArr) {

  // Only Code Here

}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
