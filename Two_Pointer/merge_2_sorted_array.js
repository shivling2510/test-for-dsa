let a=[1,2,3], n1=a.length;
b=[1,3,3,5,6], n2=b.length;
let i=0, j=0, x=[];

for(k=0;k<n1; k++){

    if(a[i]==b[j]){
        x.push(a[k]);
        x.push(b[k]);
        i++,j++;
    }else if(a[i]>b[j]&&j<n2){
        x.push(b[j]);
        j++;
    }
    else{
        // x.push(a[i])
        // i++;
        x.push(a[i]);
        x.push(b[j]);
        i++,j++;
    }
    console.log(x)
}