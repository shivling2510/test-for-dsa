function oddSumSubArr(N, arr) {
    var count = 0;
    for (let i = 0; i < N; i++) {
        var x = [];
        for (j = i; j < N; j++) {
            x.push(arr[j]);
            //  console.log(x);
            var sum = 0;
            for (k = 0; k < x.length; k++) {
                sum = sum + x[k];
            }
            //  console.log(sum);
            if (sum % 2 != 0) {
                count++;
            }
        }
    }
    console.log(count);
}
oddSumSubArr(3, [1, 2, 3]);
