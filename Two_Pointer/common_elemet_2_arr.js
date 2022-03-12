// find the common element in 2  sorted array
//a=[1,2,2,3,4,5] ---->i
// b=[1,1,2,3,4,4] ----->j
function runProgram(input) {
    input = input.trim().split("\n");
    //  console.log(input);
    let test = +input[0];
    line = 1;

    for (i = 0; i < test; i++) {
        n = +input[line];
        line++;
        let a = input[line].trim().split(" ").map(Number);
        line++;
        let b = input[line].trim().split(" ").map(Number);
        line++;
        b = b.reverse();
        checkRepete(n, a, b);
        // console.log(a ,'\n', b)
    }

    function checkRepete(n, a, b) {
        let i = 0,
            j = 0,
            count = 0;
        while (i < n && j < n) {
            if (a[i] < b[j]) {
                i++;
            } else if (b[j] < a[i]) {
                j++;
            } else {
                count++, j++, i++;
            }
            //a=[1,2,2,3,4,5] ---->i
            // b=[1,1,2,3,4,4] ----->j
        }
        console.log(count);
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

runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`)