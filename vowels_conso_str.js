const { count } = require("yargs");

function vowelAndConsonantCount(N, str) {
    var o =['u','o','i','e','a'];
 
       var count = 0;
    var    count2 = 0;
    // ste='ankush'
    for (var i = 0; i < N; i++) {
        for (j = 0; j < o.length; j++) {
            if (str[i] === o[j]) {
                count++;
                console.log('wovels',count, str[i])    
            }

            if(str[i]!=o[j]){
                count2++;
                console.log(count2)
                break;
            }

            
            
        }
    }
   
}
vowelAndConsonantCount(6, 'ankush')