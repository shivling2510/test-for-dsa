var a='shivling', count=0;

for(i=0;i<a.length;i++){
    var str="";
    for(j=i;j<a.length;j++){
        str=str + a[j];
        count++;
        console.log(str, count)
    }
}