var a=[5,5,7, 3, 15];
sum=10;
l=0;
r=a.length-1;
while(1){
if(a[l]+a[r]<sum){
  l++;
}
else if(a[l]+a[r]>sum){
  r--;
}
else if(a[l]+a[r]==sum){
  console.log('oooz',a[l],a[r], sum);
  break;
}
else{
  console.log('pppp', -1,-1)
  break;
}
}