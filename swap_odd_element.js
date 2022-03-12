function swapOddEvenElements(N, arr) {
    for (i = 0; i < N; i++) {
        p = i % 2;
        if (p != 0) {
            var temp;
            temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
        }
    }

    console.log(arr);
}
swapOddEvenElements(6, ["A", "B", "C", "D", "E", "F"]);
