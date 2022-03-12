function runProgram(input) {
    input = input.trim().split("\n");

    let test = +input[0],
        line = 1;
    b = input[1].trim().split(" ").map(Number);

    a = [];
    for (p = 0; p < test; p++) {
        a.push([b[p], p]);
    }
    f = [];
    console.log('orignal 2d arr is ',a)
//[9,5,6,1]
for(i=0;i<test;i++){
    for(j=i+1;j<test;j++){
        x=a[i][0];
        y=a[j][0];
        if(x>y){
            temp=x;
            x=y;
            y=temp;

        }
    }
}

    // b = b.sort();
 console.log('after sorting', b)
    for (h = 0; h < test; h++) {
        u = f.push(a[h][1]);
    }
    console.log('ff', f.join(" "));
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
runProgram(`50
41 18467 6334 26500 19169 15724 11478 29358 26962 24464 5705 28145 23281 16827 9961 491 2995 11942 4827 5436 32391 14604 3902 153 292 12382 17421 18716 19718 19895 5447 21726 14771 11538 1869 19912 25667 26299 17035 9894 28703 23811 31322 30333 17673 4664 15141 7711 28253 6868`)
