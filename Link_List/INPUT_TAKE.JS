function runProgram(input) {
    input = input.trim().split("\n");
    var a = input[4].split(" ");
    var b = input[2].split(" ");
    let sum = 0,
        sum2 = 0;
    line = 1;
    let testCases = +input[0];
    // console.log(testCases)

    for (i = 0; i < testCases; i++) {
        let sum = 0;P
        let len = +input[line];
        line++;
        //   let arr =.trim().split(' ').map(Number);
        for (j = 0; j < len; j++) {
            let x = input[line].trim().split(" ");
           
            if (+x[j] % 2 === 0) {
                sum = sum + +x[j];
            }
        }
        console.log(sum);
        line++;
    }
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

runProgram(`2
3
1 2 3
5
2 2 2 2 1`)