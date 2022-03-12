console.log('hii');

let a = "abcabcbb"
let n=a.length;
count=1;
for(i=0;i<n;i++){
	let x='';
	for(j=i;j<n;j++){
		x=x+a[j];
		// console.log(x, count++)
        
	}
}

function checkRepete(x){ 
	let g=x.length, k='';
	for(m=0;m<g;m++){
        for(t=i+1;t<g;t++){
            if(x[m]!==x[t]){
                k=k+x[m];
                
            }
        }
        console.log('string is ', k)
	}
   
}
