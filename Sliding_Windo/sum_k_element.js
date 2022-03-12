// find max sum of K consiquences elemet and print it;
var a = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9];
let k = 3;
a = [1, 2, 3, 4, 5];
// (1,2,3), (2,3,4), (3,4,5)
// 6,      9,          12
(sum = 0), (n = a.length - 1);
(l = 0), (r = k - 1), (max_sum = Number.NEGATIVE_INFINITY);
for (i = 0; i < k; i++) {
    sum = sum + a[i];
}
console.log(a);

while (r < n) {
    sum = sum + a[r + 1] - a[l];   
    if (sum > max_sum) {
        max_sum = sum;
    }
   
    console.log('updated sum ', max_sum);
    r++, l++;
}
console.log("mmmmmmmmmmmm", max_sum);
