function listSquared(m, n) {
	var output = [];
	for (var i = m; i <= n; i++) {
        var sum = 0;
		for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                
                sum += j * j;
			}
		} if (Math.sqrt(sum) % 1 === 0) {
            output.push([i, sum]);
		}
    } 
    return output;
}
console.log(listSquared(1, 250));
console.log(listSquared(42,250));