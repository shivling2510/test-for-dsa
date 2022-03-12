var a=1221;
a=a.toString();
var l=0, r=a.length-1;

while(1){
    if(a[l]===a[r]){
        l++, r--;
    }
    else{
        console.log('Not palindrom');
        break;
    }
    if(l>=r){
        console.log('Palindrom');
        break;
    }
};