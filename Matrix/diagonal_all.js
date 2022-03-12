var a=[
    
  ['a',   'b',  'c',  'd',  'e'],
   ['f',   'g',  'h',  'i',  'j'],
  ['k',   'l',  'm',  'n',  'o'],
   ['p',   'q',  'r',  's',  't']
];
var x=[];

for(i=0;i<a.length;i++){
    for(j=0;j<a[0].length;j++){
        if(i+j==i){
            x.push(a[i][j])
        }
    }
}
console.log(x.join(" "))