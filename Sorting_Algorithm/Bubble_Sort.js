// gretter element goes to end of array
// largest elemet goes to end of the array in every iteration
//each step 1 gretter element goes to end
// bubble sort is example of stable sort means order donot change;

let a=[3,4,0,1,0, -10];
a=[3,4,7,6,5,0,1]
// a=['p','aa','az','ab','aba','bb']
let n=a.length;
for(i=0;i<n;i++){
    for(j=0;j<n-1-i;j++){
        if(a[j]>a[j+1]){
            console.log(a[j],a[j+1],'a',j,a);
            [a[j],a[j+1]]=[a[j+1],a[j]];
     
        }
    }
    console.log('iii',i)
}
console.log(a)

