let a= [1,2,3], n=a.length;

k=1, x=[];
if(k>n){
    k=k%n
}
for(i=k+1;i<n;i++){
    x.push(a[i]);
}
for(j=0;j<=k;j++){
    x.push(a[j])
}

console.log(x)