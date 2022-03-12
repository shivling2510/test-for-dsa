const { decompressFromUTF16 } = require("lz-string");

var data=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
var d1=[]

for(i=0;i<data.length;i++){
    k=data.length;
    if(i%2==0){
        for(j=0;j<k;j++){
            d1.push(data[i][j])
        }
    }
    else{
        for(j=k-1;j>=0;j--){
            
           d1.push(data[i][j])
        }
    }
}

console.log(d1.join(" "))