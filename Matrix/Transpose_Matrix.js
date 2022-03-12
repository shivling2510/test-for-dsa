var a=[
    [1,2,3],
    [5,6,7],
    [9,10,11],
    [13,14,15]
]
var m=[ ];

for(i=0;i<a.length;i++){
  var m=[ ];
  for(j=0;j<a.length; j++){
    //console.log(a[j][i])
    m.push(a[j][i])
  }
  console.log(m.join(" "))
}














// for(i=0;i<a.length;i++){
//     for(j=0;j<a[0].length;j++){
//       //  m.push(a[j][i]);
//       var temp=a[i][j];
//       a[i][j]=a[j][i];
//       a[j][i]=temp;
//       m.push(a[j][i])
       
//     }
   
// }
// console.log( m);