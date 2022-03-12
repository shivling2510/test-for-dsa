function runProgram(input) {
    input=input.trim().split('\n');
    //input=input[line].trim().split(' ').map(Number);
    //console.log(input);
 [r,c]= input[0].trim().split(' ').map(Number);
a=[];
 for(k=0;k<+r;k++){
     a.push(input[k+1].trim().split(' ').map(Number));
 }
 //console.log(a)

 for(i=0;i<c;i++){
     sum=0;
     for(j=0;j<r;j++){
         if(a[j][i]%2===0){
         sum=sum+a[j][i]

         }
     }
     console.log(sum)
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
 
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9`)
                                                                                                                                               