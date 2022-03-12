function runProgram(input) {
    input = input.trim().split("\n");
   // console.log(input);
    var [r, c] = input[0].split(" ").map(Number);
    var a = [];
    for(i=0;i<+r;i++){
        a.push(input[i+1].trim().split(' ').map(Number));
    }
 //   console.log(a)

    for(j=0;j<r;j++){
        h=a[j].join(' ');
        console.log(h)
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
runProgram(`
3 2
1 2
3 4
5 6`);