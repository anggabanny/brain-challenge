var obj = {
    name : '',
    namL : '',
    Naml : '',
    nameT : 'syahputra'
}
obj.name = 'angga'
obj['namL'] = 'banny'
var name = 'Naml'
obj[name] = 'ridwan'
console.log(obj);


var arr = [123456789];
var arr2 = arr.toString().split('').sort(function(a,b){return a-b})
console.log(arr2);