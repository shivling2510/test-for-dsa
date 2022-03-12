function runProgram(input) {
    input=input.trim().split('\n');
     // console.log(input);
  //   input[line].split(' ').map(Number); line++;
   
     let test=+input[0];
    let line=1;
    let a;
    for(t=0;t<test;t++){
          let n= +input[line]; line++;
          let x=[];
        for(i=0;i<n;i++){
             a=input[line].split(''); line++;
           
           x.push(a)
            
        }
     //   console.log('new',x)
       checkSy(x,n)
    }
    
  }
  
  function checkSy(x,n){
      let count=0, bb=true, k1=true, k2=true;
      for(i=0;i<n&&bb;i++){
          
          for(j=0;j<n;j++){
              h=x[i][j];
              v=x[n-i-1][j];
              
              if(h==v){
                  
              }else{
                 //  console.log('not symetry horizontal')
                  k1=false;
                  bb=false;
                  break;
              }
          }
      }
      
      vv=true, count2=0;
      
      for(i=0;i<n&&vv;i++){
          for(j=0;j<n;j++){
              d=x[j][i];
              e=x[n-j-1][i];
              if(d==e){
                  
              }else{
                 //  console.log('not symetric vertical')
                  k2=false;
                  vv=false;
                  break;
              }
          }
      }
      
      if(k1&&k2){
          console.log('BOTH')
      }
      else if(k1==true&&k2==false){
          console.log('HORIZONTAL')
      }
      if(k1==false&&k2==true){
          console.log('VERTICAL')
      }
      if(k1==false&&k2==false){
          console.log('NO')
      }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });	
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  } 
 
 runProgram(`3
 4
 *.*.
 .*.*
 *.*.
 .*.*
 3
 .*.
 *.*
 .*.
 3
 ..*
 **.
 ..*`)
                                                                                                                                               