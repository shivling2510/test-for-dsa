//`You are given a sorted arrayAof size N, and another integer K
// You have to find if there exists a pair of integers with indexiandj, such thati != j, andA[i] - A[j] = k
// If such a pair exists, printYes, else printNo`
function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    //   console.log(input);
    let line = 1;
    for (i = 0; i < test; i++) {
        [n, k] = input[line].trim().split(" ").map(Number);
        line++;
        arr = input[line].trim().split(" ").map(Number)
        line++;

        checkDiff(n, k, arr);
    }
}
function checkDiff(n, k, a) {
    let l = 0,
        count = 0,
        r = 1;
    while (r < n) {
        diff = a[r] - a[l];

        if (diff < k) {
            r++;
        } else if (diff > k) {
            l++;
        } else {
            //  console.log(`a[r] [l]`,a[r] ,a[l] ,(a[r]-a[l]))
            r++, l++, count++;
        }

        //  console.log()
    }
    console.log(count > 0 ? "Yes" : "No");
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

runProgram(`5 7
 1 2 3 4 5`)