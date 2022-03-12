console.log("hii");
// let a = [0, 2, 3,10,12,90,888],

let a=[1,2,4]
let b=[1,3,4]

    n1 = a.length;
// let b = [1, 3, 3, 5, 6],
    n2 = b.length;
let i = 0,
    j = 0;
let x = [];
while (i < n1 || j < n2) {
    if (a[i] > b[j] && i < n2) {
        x.push(b[j]);
        console.log(i, j, " x1", x);
        j++;
    } else if (b[j] > a[i] && j < n2) {
        x.push(a[i]);
        console.log(i, j," x2", x);
        i++;
    } else {
        if(i<n1){
            x.push(a[i]);

        }
        if(j<n2){
            x.push(b[j]);

        }
        console.log(i,j , 'x=x', x);
        i++, j++;
    }
}
