let a=[10,2,4,5,6,7,8,9,2,3];
var b=['a','e' ,'b','e', 'c', 'd','b','c', 'a','c'];
var data={};

for(var i=0;i<a.length;i++){
  var k=a[i];
  data[k]='m';
//  console.log(data);
}

console.log(Object.keys(data))
var unq=[]; 
for(m=0;m<b.length;m++){
  var count=0;
    for(j=0;j<unq.length;j++){

      if(b[m]==unq[j]){
        count++;
      }
    }
    if(count==0){
      unq.push(b[m]);
    }
}

console.log('array method ', unq);
 
