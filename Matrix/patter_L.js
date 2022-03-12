function patternOfL(N) {
    for(let i=0;i<N;i++){
      var str="";
     for(let j=0;j<N;j++){
       if(j==0||i==N-1||j==N-1){
     	str=str+ '*' +" ";
     }
     else{
         str=str+ " " +" ";
     }
    
    }
    console.log(str)
    }
}

patternOfL(5)