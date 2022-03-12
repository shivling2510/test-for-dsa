function masaiPalSubString(s){
 var a =s
    var count = 0, mx=[], mx2=[];

for (i = 0; i < a.length; i++) {
    let str = "";
    for (j = i; j < a.length; j++) {
        str = str + a[j];
        count++;
        var s = str.split("");
        var str2 = "";
        for (l = s.length - 1; l >= 0; l--) {
            str2= str2 + s[l];  
        }
        if(str2==str&&1){
    
            mx.push(str2);
            mx2.push(str2.length)

        }
    }
    var t=Math.max(...mx2);
    var find_index_max = mx2.indexOf(7);
    var elemet=mx[find_index_max];
}
console.log(t, elemet);
}
masaiPalSubString( "thisracecarisgood")