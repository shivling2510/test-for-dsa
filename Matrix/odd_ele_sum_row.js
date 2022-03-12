var a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(i=0;i<a.length;i++){
    var sum=0;
    for(j=0;j<3;j++){
        
        var a1=a[i][j];
        if(a1%2!=0){
          //  console.log(a1)
            sum=sum+a1;
        }

    }
    console.log(sum)
}