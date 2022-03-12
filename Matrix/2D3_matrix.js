// var data=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(data.length)
// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         if(i==j){
//             console.log(data[i][j])
//         }
//     }
// }


// //for(i=0;)

var array=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
var array=[]
for(i=2;i>=0;i--){
    for(j=3; j>=0;j--){

        array.push([j][i]);
        console.log(array)
    }
}
