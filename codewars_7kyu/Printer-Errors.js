function printerError(s) {
    var g = s.toLowerCase()
    var total = g.length
    var count = 0

    for(var i = 0; i < g.length; i++){
        switch (g[i]) {
            case 'n':{ count++ ;break;}
            case 'o':{ count++ ;break;}
            case 'p':{ count++ ;break;}
            case 'q':{ count++ ;break;}
            case 'r':{ count++ ;break;}
            case 's':{ count++ ;break;}
            case 't':{ count++ ;break;}
            case 'u':{ count++ ;break;}
            case 'v':{ count++ ;break;}
            case 'w':{ count++ ;break;}
            case 'x':{ count++ ;break;}
            case 'y':{ count++ ;break;}
            case 'z':{ count++ ;break;}
        }
    }
    return count+'/'+total
}
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
