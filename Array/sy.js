function runProgram(input) {
    input = input.trim().split("\n");
    console.log(input);
    //   input[line].split(' ').map(Number); line++;
    let t = +input[0];

    let line = 1;
    for (test = 0; test < t; test++) {
        let x = [];
        n = +input[line];
        line++;
        for (p = 0; p < n; p++) {
            let a = input[line].split("");
            line++;
            x.push(a);
        }

        console.log(x, n);
        checkSy(x, n, t);
    }
}

function checkSy(x, n) {
    let hori = true,
        ver = true;

    for (f = 0; f < n; f++) {
        // console.log('ff')
        for (j = 0; j < n; j++) {
            row_f = x[f][j];
            row_l = x[n - 1 - f][j];
            if (row_f != row_l) {
                hori = false;
                console.log("Not Horizontal");
                console.log("HH", hori, f);
                break;
            }
        }

        for (h = 0; h < n; h++) {
            col_f = x[h][f];
            col_l = x[n - h - 1][f];
            if (col_f != col_l) {
                ver = false;
                console.log("Not vertical", ver, f);
                break;
            }
        }
    }
    if (hori == false && ver == false) {
        console.log("##### NO ############");
    }
    if (hori == true && ver == false) {
        console.log("****HHHHHHHHH**********");
    }
    if (hori == false && ver == true) {
        console.log("****VVVVV*****");
    }
    if (hori == true && ver == true) {
        console.log("##### Both ############");
    }
    // if(ver==true&&hori==true){
    //   console.log('BOTH')
    //    }else if(ver==false&&hori==false){
    //        console.log('');

    //    }
}

if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}

runProgram(`3
 4
 *.*.
 .*.*
 *.*.
 .*.*
 3
 .*.
 *.*
 .*.
 3
 ..*
 **.
 ..*`);
