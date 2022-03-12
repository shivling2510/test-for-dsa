var a='a3b2';

var s=a.split('')
console.log( s);
for(i=0;i<s.length;i++){
    var t=s[i]*1
   // console.log( t);
    if(typeof(t)!==NaN){
        //console.log(t, 'iss')
    }
    else{
        console.log( t*1);
    }
} 