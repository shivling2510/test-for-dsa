//prime no from 2 to 100;
for (i = 2; i < 100; i++) {
     let p = 1;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
           p=0;
        }
      
    }
    if(p){
        console.log('prime no ',i)
    }
}
