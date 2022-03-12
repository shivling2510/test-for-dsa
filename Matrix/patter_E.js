function patternOfE(N) {

    for(let i=0;i<N;i++){
        let str="";
        for(j=0;j<N;j++){
            
            if(i==0||j==N-1||i==N-1){
                str=str + '*' +' ';
            }
            else{
                str=str + " " +" ";
            }
        }
        console.log(str)
    }







    // for(let i=0;i<N;i++){
    //   var str="";
    //  for(let j=0;j<N;j++){
    //    if(j==0||i==N-1||j==N-1){
    //  	str=str+ '*' +" ";
    //  }
    //  else{
    //      str=str+ " " +" ";
    //  }
    
    // }
    // console.log(str)
    // }
}

patternOfE(5)