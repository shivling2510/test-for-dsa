const { decompressFromUTF16 } = require("lz-string")

var a=[
    ['a','b','c','d','e'],
    ['f','g','h','i','j'],
    ['k','l','m','n','o']
];
var d1=[];

for(i=2;i>=0;i--){
    for(j=4;j>=0;j--){
    d1.push(a[i][j])
    }
}

console.log(d1.join(" "))