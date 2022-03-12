// You are given an array A of N integers, and an integer K. Find the maximum value of S, such S that S = a[i] + a[j], 
//and S < K. If no such value exists, then print -1.
function runProgram(input) {
    input = input.trim().split("\n");
    //  console.log(input);
    test = +input[0];
    let line = 1;
    for (t = 0; t < test; t++) {
        n = +input[line];
        line++;
        a = input[line].trim().split(" ").map(Number);
        a = a.sort(function (a, b) {
            return a - b;
        });
        //   console.log('aa',a)
        line++;
        k = +input[line];
        line++;
        // console.log(n, a, k)
        maxValue(n, k, a);
    }
    function maxValue(n, k, a) {
        let l = 0,
            r = n - 1,
            max = -1;

        while (l < r) {
            sum = a[l] + a[r];

            if (sum < k) {
                if (sum > max) {
                    max = sum;
                }
                l++;
            } else {
                r--;
            }
        }
        console.log(max === -1 ? -1 : max);
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
2
5
1 2 3 4 5
7
3
30 10 20
15
`)