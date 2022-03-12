var N=6;
var A=[1, 2, 3, 5, 7, 12 ];

for(var i=0;i<N;i++){
    for(j=0;j<N;j++){
      //  var l=i<j;
       // var p=j-1;
        var count=0;
        for(m=1;m<=(j-1);m++){
            
            if((j-1)%m==0){
                count++;
                console.log('j-1 ',j-1, count)
            }
        }
        if(count<=2&&(i<j)&&((j-1)!=1)){
            console.log('val',i,j, ' p', (j-1))
            console.log('diff', A[i]-A[j]);
            
        }
       // var a=A[i]-A[j];

    }
}