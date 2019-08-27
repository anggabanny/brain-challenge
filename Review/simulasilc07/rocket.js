/*
----------------------------
ROCKET - Operation Evaluator
----------------------------
PROBLEM
=======
Proses nested object di bawah ini menjadi operasi matematika 
dan hitung hasil akhirnya!
diberikan operator +, -, *, dan /. 
Abaikan pembulatan dan biarkan angka koma tetap ada.

WAJIB menggunakan metode rekursif!

*/

function operationEvaluator(operation) {
  var angka = [1,2,3,4,5,6,7,8,9,0]
  var operasi = operation.op

  if (angka.indexOf(operation.right) != -1) {
    switch (operasi) {
      case '-': { var yuk = operation.left - operation.right ;break;}
      case '+': { var yuk = operation.left + operation.right ;break;}
      case '*': { var yuk = operation.left * operation.right ;break;}
      case '/': { var yuk = operation.left / operation.right ;break;}
    }
    return yuk
  } else {
    switch (operasi) {
      case '-': { var yuk = operation.left - operationEvaluator(operation.right) ;break;}
      case '+': { var yuk = operation.left + operationEvaluator(operation.right) ;break;}
      case '*': { var yuk = operation.left * operationEvaluator(operation.right) ;break;}
      case '/': { var yuk = operation.left / operationEvaluator(operation.right) ;break;}
    }

    return yuk
  }
}


var op1 = {
  left: 5,
  op: '-',
  right: {
    left: 3,
    op: '*',
    right: {
      left: 8,
      op: '-',
      right: {
        left: 200,
        op: '/',
        right: 5,
      }
    }
  }
};

// proses: 5 - (3 * (8 - (200 / 5)))
console.log(operationEvaluator(op1)); // 101

var op2 = {
  left: {
    left: 10,
    op: '*',
    right: {
      left: 2,
      op: '+',
      right: 1,
    },
  },
  op: '+',
  right: {
    left: 5,
    op: '*',
    right: {
      left: 1,
      op: '-',
      right: {
        left: 1,
        op: '+',
        right: 2,
      }
    }
  }
};

// proses: ((10 * (2 + 1)) + (5 * (1 - (1 + 2)))
console.log(operationEvaluator(op2)); // 20
