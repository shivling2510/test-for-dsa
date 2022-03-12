function runProgram(input) {
    input=input.trim().split('\n');
    let test=+input[0];
  //  console.log(input);
    let line=1;
    
    for(t=0;t<test;t++){
        n1=+input[line];
        line++;
        a=input[line].trim().split(' ').map(Number);
        line++;
        n2=+input[line];
        line++;
        b=input[line].trim().split(' ').map(Number);
        line++;
        //console.log(n1,n2,a,b)
         commonElement(n1,n2,a,b)
    }
    
    function commonElement(n1,n2,a,b){
        let i=0,j=0, x=[];
        n1>n2 ? m=n1:m=n2;
        while(i<n1&&j<n2){
           // console.log('herer')
            if(a[i]<b[j]){
                i++;
            }
           else if(b[j]<a[i]){
                j++;
            }
            else{
                 x.push(a[i]);
                i++,j++;
            }
        }
         console.log(x.length>0 ? x.join(' '):-1)
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
 
  runProgram(``);
                                                                                                                                                                                  