
let s='abcdefghijklmnopqrstuvwxyz';
let c='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let t=[ 'TM','OK',"by"];
  var str=""
  // op=tEST

  for(i=0;i<t.length;i++){
    for(j=0;j<s.length;j++){
        p=t[i]
        console.log('is',p);
        for(x=0;x<p.length;x++){
            console.log( 'lengh ',p[i]);
            if(t[i]==c[j] ){
                str=str + s[j];
                
              }

        }
  
    //   if(t[i]==c[j]){
    //     str=str +s[j];
    //   }
 
    }
  }
  

  console.log('lll',str);
 