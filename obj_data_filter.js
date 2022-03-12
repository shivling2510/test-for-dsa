var input = `Nrupul cmd
Prateek js
Aman ds
Nrupul python
Albert js
Albert react
Aman algo
Prateek html
Nrupul sql`;
console.log(input);
var input = input.split("\n");
//var arr2=arr.split('\n')
//console.log(arr );

var obj = {};
for (i = 0; i < input.length; i++) {
    var data = input[i].split(" ");
    var pname = data[0];
    var value = data[1];

    obj[pname] = value;
    console.log(obj);

    if (obj[pname]) {
        // to check if Nrupul is there;
        var skill = [];
        if (typeof obj[pname] == "string") {
            skill.push(obj[pname]); //to add first val cmd;
            skill.push(value); //python
            obj[pname] = skill;
        } 
        //if value is an array already
        else {
            var pre_arr = obj[pname];
            for (j = 0; j < pre_arr.length; j++) {

                skill.push(pre_arr[j])
            }
            skill.push(value)
        }
    } else {
        obj[pname] = value;
    }
}
