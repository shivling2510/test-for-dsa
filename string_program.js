// count no of  world prasesnt in string
let a='A TRANSFORMATION IN EDUCATION';
var world=1;
for(i=0;i<a.length;i++){
  if(a[i]==" "){
    
    world++;
  }
}
console.log('no of world is :', world)

//Lowercase to Uppapercase string;
let b='m';
let l='abcdefghijklmnopqrstuvwxyz';
let u='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for(i=0;i<=l.length;i++){

    if(b==l[i]){
      console.log('UpperCase Character is : ', u[i]);
      
    }
  }

  //count the total length of wold in string;

  let a1=['shiv', 'sachin', 'nishant'];
total=0;
  for(k=0;k<a1.length;k++){
    //var name=a1[i];
    total=total + (a1[k]).length;
    
  }

  console.log('Total length is : ', total)