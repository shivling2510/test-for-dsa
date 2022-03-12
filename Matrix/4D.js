var data=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

for(i=0;i<data.length;i++){
    for(j=0;j<data.length;j++){
        if(i==j){
            console.log(data[j][i]);
        }
    }
}
