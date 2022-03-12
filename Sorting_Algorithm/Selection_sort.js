// selction sort 
// selection first element and sort with any number which is less than this number 
// time complacity O(n^2)
//space complexcity O(1);
// selection sort doesnot maintai order of algorith this is drawback [12 18 17 6 46] sort modules value by 6 
let a=[3,4,0,1,0, -10];
a=[3,4,7,6,5,0,1]
// a=['p','aa','az','ab','aba','bb']
let n=a.length;
for(i=0;i<n;i++){
    let min=i;
    for(j=i+1;j<n;j++){
        if(a[i]>a[j]){
            [a[i],a[j]]=[a[j],a[i]]
            // console.log(a[i],a[j])
            // let temp;
            // temp=a[i]  
            // a[i]=a[j];
            // // a[i]=a[j];
            // a[j]=temp;
            console.log(a)
        }
    }
}