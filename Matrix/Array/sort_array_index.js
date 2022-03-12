//given unsorted array sort it and then write sorted arrays index with orignal array
// [4,5,3,7,1];  [ 1, 3, 4, 5, 7 ]
// answer : [ 4, 2, 0, 1, 3 ]
//O(n) complexcity;
var a = [4, 5, 3, 7, 1];
t = a.length;
x = [];
for (i = 0; i < t; i++) {
    x.push([i, a[i]]);
}
console.log(x.sort());

for (j = 0; j < a.length; j++) {
    console.log(x[j][1]);
}

// 2th approach o(n^2 complecity)

var a = [4, 5, 3, 7, 1];
console.log("orignal arr", a);
t = a.length;

(x = []), (y = []);
for (i = 0; i < a.length; i++) {
    x.push(a[a.length - 1 - i]);
}

var x = x.sort();

for (m = 0; m < t; m++) {
    for (n = 0; n < t; n++) {
        if (x[m] == a[n]) {
            y.push(n);
            a[n] = -1;

            break;
        }
    }
}
console.log("sorted arr ", x, "\n after sorted index orignal ", y);
