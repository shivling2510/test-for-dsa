// find sum of all pairs of sorted array whose sum is less than x(number) 
// if array is unsorted then sort it

a=[1,2,3,4,5,6,7,8,9,10]
let l=0; r=a.length-1;
// console.log(r, 'xx');
var count=0, x=7;
console.log('hii')

while(l<r){

    if(a[l]+a[r]>x){
        r--;
    }
    else{
        count=count+r-1;
        // 1+6=7, all element between this its sum is always less
      //  console.log(1, r)
        l++;
    }
}
console.log('all pairs whose sum is less than',x, 'is' , count)