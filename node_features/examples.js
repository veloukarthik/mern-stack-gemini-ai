// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr = [1,2,3,4,5];

let slice = arr.slice(1,2);

let splice = arr.splice(6,0,6,7);

console.log("slice",slice);

console.log("splice",arr);

// rest and spread operator
let arr1 = [1,2,3];

let [one,...rest] = arr1;

console.log("one",one);

console.log("rest",rest);

let arr2 = [4,5,6,1,2,3];

let join = [...arr1,...arr2];

console.log("join",join);

// remove duplicates
let remove = [...new Set(join)];

console.log("remove duplicates",remove);

//flatten array
let arr3 = [[1,2,3],[3,4,[5,6]],[7,[8,9,[10,11]]]];

let flat = arr3.flat(Infinity);

console.log("flatten array",flat);


//shallow copy and deep copy

let arr4 = [...arr2];

 arr4['1'] = 100;

console.log("shallow",arr4);

let arr5 = JSON.parse(JSON.stringify(arr4));

arr5['1'] = 2;

console.log("deep copy",arr5);

for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
