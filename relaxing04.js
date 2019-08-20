function test(param) {
    console.log(param);
    if (param == 1) {
        return 1
    } else {
        return test(param -1)
    }
}

console.log(test(4));