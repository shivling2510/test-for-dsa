function patternOfL(N) {
    var str=""
      for(i=0;i<N;i++){
      for(j=0;j<N;j++){
        //   if(j==0){
        //  // console.log('*');
        //   }

        if(i=N-1){
        str=str +(j+1)
        
        }
        console.log(str, 'pp')
      }
  }
}

patternOfL(4)