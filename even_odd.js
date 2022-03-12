function swapOddEvenElements(N, arr) {
    var o = [],
        e = [],
        f = [];
    for (i = 0; i < N; i++) {
        var a = i % 2;
        if (a == 0) {
            e.push(arr[i]);
        } else {
            o.push(arr[i]);
        }
    }
    console.log('oddd',o);
    console.log('even ', e)

    for (k = 0; k < arr.length; k++) {
       // K= (K/2);
        if (k % 2 != 0) {
            f.push(e[k]);
        } else {
            let y=Math.floor(k/2);
            console.log('yy', y, 'kk',k);
            f.push(o[y]);
        }
    }
    console.log(f);
}
swapOddEvenElements(6, ["A", "B", "C", "D", "E", "F"]);