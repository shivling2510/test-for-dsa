let num;

// console.log(num)
// console.log(typeof(num))

// console.log(num===null);

// define arrau use curly breaces

var users= {
  name: 'shiv',
  age:22,
  gender: 'male',
  city:'pune',
  hobbies: ['swiming', 'cricekt', 'coding']
}
console.log(users.name, users.hobbies.length);
console.log(typeof users.name);
console.log('kkk',typeof(users));
console.log(users['name']);
var x=1;
y=
console.log('lll',users[x]);
users.color='red';
console.log(users)
users['name']= 45
console.log(users);
console.log(typeof (users.name));

for(key in users){
  console.log(users[key]);
}

console.log('keys of users ', Object.keys(users));
console.log('values of users',Object.values(users));

ks=Object.keys(users)
for(var i=0; i<ks.length;i++){
  console.log('values of key is ',users[ks[i]]);
}