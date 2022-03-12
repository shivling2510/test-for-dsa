// var str='shiv';
// var str2='';

// for(i=str.length-1; i>=0;i--){
//     str2=str2 + str[i]
//     //console.log( str[i]);
// }
// console.log(str2)

function checkPalindrome(N,str) {
    var str2="";
  var str1=str;
  
  for(i=N-1;i>=0;i--){
  str2=str2 +str1[i];
  }
// console.log(str2, str)
    if(str==str2){
   console.log('Yes')
    }
  else{
	console.log('No')
    }
    
    
}
checkPalindrome(5
    ,'papap')