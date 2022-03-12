var a=[
    //   0       1    2     3     4
 0   ['a',   'b',  'c',  'd',  'e'],
 1   ['f',   'g',  'h',  'i',  'j'],
 2   ['k',   'l',  'm',  'n',  'o'],
 3   ['p',   'q',  'r',  's',  't']
];

// (0,0)
// (1,0)
// (0,1);
// (2,0);
// (1,1)
// (2,0)
var x=[];
for(i=0;i<a.length;i++){
    // N=0 
    if(i%2!=0){
        for(j=a[0].length-1;j>=0;j--){
            x.push(a[i][j]);
        }
    }
    for(j=0;j<a[0].length; j++){
        x.push(a[i][j]);
    }
}
console.log(x.join(' '))