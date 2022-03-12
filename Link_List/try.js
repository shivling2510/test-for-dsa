function runProgram(input) {
    input = input.trim().split("\n");
    test = input[0];
    line = 1;

    for (i = 0; i < test; i++) {
        let [N, k] = input[line].trim().split(" ").map(Number);
        line++;
        
        let a = input[line].trim().split(" ").map(Number);
        console.log(`n, k ${[N, k], a} line is ${line} m`)
        x = a.sort(function (a, b) {
            return a - b
            
        });

        //  console.log(x);
        line++;
        checkAddition(N, k, x);
    }

    function checkAddition(N, k, arr) {
        let l = 0;
        r = N - 1;
        let p = false;
        while (l < r) {
            if (x[l] + x[r] > k) {
                r--;
            } else if (x[l] + x[r] < k) {
                l++;
            } else {
                p = true;
                console.log(1);
                break;
            }
        }
        // console.log('fffff', p)
        if (p === false) {
            console.log(-1);
        }
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
10
3 -9
-1 3 -1
10 -13
-7 -6 4 10 -5 0 -3 1 -6 5
4 -9
-2 2 0 -4
2 3
0 0
8 2
5 -6 7 6 0 3 -4 8
1 -7
0
8 -6
4 7 4 -1 5 4 -6 -8
6 4
6 -1 -5 -5 2 -5
4 -4
0 -1 3 -2
1 3
-1
`)
var a = new stack()
console.log('hiii', a)