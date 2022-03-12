var name='shiv4lin4iiig';
item={

}

for(var i=0;i<name.length;i++){
  var char=name[i];
  if(item[char]==undefined){
    item[char]=1;
  }
  else{
    var prev=item[char];
    item[char]=prev + 1;
  }
//   console.log(char);
//   console.log(item);
 }

 for(k in item){
   console.log(k+ "-" +item[k]);
 }