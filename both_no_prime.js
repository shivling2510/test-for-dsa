
let a=[2,19], x=[];
var count1=0, count2=0, isPrime;
for(k=0;k<a.length;k++){
    for(i=2;i<=a[k];i++){
        isPrime=1;
        for(j=2;j<i; j++){
            if(a[k]%j==0){
                isPrime=0;
               // count1++;
            }

        } 
    }
  if(isPrime){
    x.push(a[k]);
  }
}
console.log(x);
