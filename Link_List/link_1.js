const n1={
    data:100
};

const n2={
    data:200
}
n1.next=n2;
console.log(n1)
n1.current=n2;
console.log('hh', n1)