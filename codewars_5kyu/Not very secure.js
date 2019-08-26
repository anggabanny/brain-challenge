function alphanumeric(string) {
    //your code here
    if (!string) {
        return false
    }
    var output = true
    for(var i = 0 ; i < string.length; i ++){
        switch (string[i]) {
            case ' ':{output = false;break;}
            case '_':{output = false;break;}
            case '+':{output = false;break;}
            case '(':{output = false;break;}
            case ')':{output = false;break;}
            case '*':{output = false;break;}
            case '&':{output = false;break;}
            case '^':{output = false;break;}
            case '%':{output = false;break;}
            case '$':{output = false;break;}
            case '#':{output = false;break;}
            case '@':{output = false;break;}
            case '~':{output = false;break;}
            case '`':{output = false;break;}
            case '!':{output = false;break;}
            case '	':{output = false;break;}

        }
    }
    return output
}
console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric('hello world_'));
console.log(alphanumeric('sKv!JRMSmXQFin'));
console.log(alphanumeric(''));

