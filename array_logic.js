function applyBasicMaths(N,A){
    var sum=0, count=0, p=[];
      for(i=0;i<N;i++){
        sum=sum+A[i];
        
      }
    //console.log(sum)
      for(j=0;j<N;j++){
            
        if((sum-A[j])%7==0){
          count++;
         p.push((A[j]));
        
        }
      //	console.log(sum)
      }
    var m=Math.min(...p);
    var t=A.indexOf(7)
    console.log(m,t)
  
  }
  applyBasicMaths(5, [14,7,8,2,4])