function queueTime(customers, n) {
    //TODO
    var queueArr = [];
    for (var i = 0; i < n; i++) {
        queueArr.push(0);
    }
    for(var i = 0 ; i < customers.length; i++){
        queueArr[0] += customers[i]
        queueArr.sort(function (a,b){return a-b})
    }
    return queueArr[queueArr.length-1]
}
console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([2,2,3,3,4,4], 2));