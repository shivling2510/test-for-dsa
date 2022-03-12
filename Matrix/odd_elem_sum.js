var a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(i=0;i<a.length;i++){
    var sum=0;
    for(j=0;j<a[0].length;j++){

        if(a[j][i]%2!=0){
            sum=sum+a[j][i];
        }
    }
    console.log(sum)
}