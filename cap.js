var a= ["MA", "SA", "I", "SCH", "OOL"];
var c='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var s='abcdefghijklmnopqrstuvwxyz';

// ["ma", "sa", "i", "sch", "ool"]

for(j=0;j<s.length;j++){
    console.log('index',s[j],j);
}


for(i=0;i<a.length;i++){
   var b;

   
   for(j=0;j<c.length;j++){
    b=a[i];
    console.log(b );
    
    for(m=0;m<b;m++){
        console.log('bbb',b)
        if(b[m]==c[j]){
            var str="";
            str=str + s[j];
            console.log('loop',str)
        }
    }
    break;

   }
  
}