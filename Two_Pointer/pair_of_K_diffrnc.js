// yoy are given array find the pair whoes difference is k;
let n=5 , l, r
let k=1;
a=[1,2, 3, 4, 5];
f=0; s=0;
let s= NEGATIVE_INFINITY;
while(s<n&&f<n){
   
    temp=a[f]-a[s];

    if (temp==k&&f!=s) return console.log('true1')
    
    if(temp<k){
        s++;
    }
    else{
        f++;
    }


    // if( a[r]-a[l]<k){
    //     r++;
    // }
    // if( a[r]-a[l]<k){
    //     l++;
    // }
   
}