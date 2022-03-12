// find max sum of K consiquences elemet and print it;
var a = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
// i=0; j=k;
let k = 3,
    n = 10;

let max_sum = Number.NEGATIVE_INFINITY;

for (i = 0; i <= n - k; i++) {
    var x = [];
        sum = 0;
    for (j = i; j < i + k; j++) {
        x.push(a[j]);
    }
    //  console.log('xx',x)
    for (g = 0; g < k; g++) {
        sum = sum + x[g];
        if (sum > max_sum) {
            max_sum = sum;
        }
    }
    //maxSum('lllll',x);
    // console.log(sum)
}
console.log("max_sum", max_sum);

function maxSum(arr) {
    let sum = 0;
    for (g = 0; g < k; g++) {
        sum = sum + x[g];
        if (sum > max_sum) {
            max_sum = sum;
        }
    }
    //  console.log(sum)
}
