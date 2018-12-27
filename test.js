const x = { a: 1, b: 2 };
const y = { c: 3, d: 4 };

const oldAppr = Object.assign({},x, y);
const newAppr = {...x, ...y};

const b = 3

const {b:test1, ...test} = newAppr;

console.log(b);
console.log(test1);
console.log(test);

console.log(oldAppr);
console.log(newAppr);

console.log(x);
console.log(y);


const a = [1,2,3,4];

const b = [5,6,7,8, 9 , 10];

const merge = [...a, ...b];

const [x,y, ...rest] = merge;

console.log(x);
console.log(y);
console.log(rest);

console.log(merge);

const a = [{a: 1}, {b: 2}];
const b = [ {c:3},  {d: 4}];
const ab = [...a, ...b];

console.log(ab);


const sum = (a, b) => a + b;
const substract = (a, b) => a - b;

// const calculator = (type, a, b) => {
//     if(type === 'sum') {
//         return sum(a, b);
//     }
//     return substract(a, b);
// }

const calculator = (type) => {
    return (a, b) => {
            if(type === 'sum') {
                return sum(a, b);
            }
            return substract(a, b);
    }
}

console.log(calculator('sum')(2, 3))

// console.log(calculator('sum', 1, 3))

const x = { z: 0};
const abx = [x, ...ab];
console.log(abx);

const index = abx.findIndex(x=>x.b === 2);
console.log(index);
const newArr = [...abx.slice(0, index), { b: 3 }, ...abx.slice(index + 1)]
const delArr = [...abx.slice(0, index), ...abx.slice(index + 1)]
console.log(newArr);
console.log(delArr);

// const y = {y: 2};
// const abxy = [...abx.slice(0,3), y, ...abx.slice(3) ];
// console.log(abxy);

class Animal {
    constructor(type = 'animal') {
        this.type = type
    }
    get type(){
        return this._type
    }

    set type(val) {
        this._type= val.toUpperCase();
    }

    makeSound() {
        console.log('making sound');
    }
}

class Cat extends Animal {
    constructor() {
        super('cat');
    }

    makeSound1() {
        super.makeSound();
        console.log('meow');
    }
}

const obj  = new Cat();
console.log(obj.makeSound1());

const a = [1,2,3,4,5,6,7,8];

const newArr = [];
for (let index = 0; index < a.length; index++) {
    const element = a[index] * 2;
    newArr.push(element);
}

console.log(newArr);
const data = a.map((item) => {
    if(item % 2 === 0) {
        return item * 2
    }
    return item;
});

console.log(data);

const a = [1,2,3,4,5,6,7,8];

let sum  = 0;
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    sum = sum + element;
}

console.log(sum);

const data = a.reduce((acc, item) => {
    console.log(acc);
    console.log(item);    
    return acc + item
}, 0);
console.log(data);

const a = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'mahantesh',
    gender: 'male'
},
{
    name: 'rohit',
    gender: 'male'
},
{
    name: 'namrata',
    gender: 'female'
},
{
    name: 'nirali',
    gender: 'female'
}];

// {
//     male: [{}],
//     female: [{}]
// }

// var groupBy = function(xs, key) {
//     return xs.reduce(function(rv, x) {
//       (rv[x[key]] = rv[x[key]] || []).push(x);
//       return rv;
//     }, {});
//   };


const data = a.reduce((acc, item) => {
    (acc[item['gender']] = acc[item['gender']] || []).push(item);
    return acc;
}, {});  

console.log(data);


// console.log(groupBy(a, 'gender'));

// const b = 'property';
// const data = {
//     [b]: 1
// }

// console.log(data);

// loop

const x = null;
const y = 2;

// const data = x || y;
// console.log(data);








const a = [{
    name: 'yagnesh',
    gender: 'male'
},
{
    name: 'mahantesh',
    gender: 'male'
},
{
    name: 'rohit',
    gender: 'male'
},
{
    name: 'namrata',
    gender: 'female'
},
{
    name: 'nirali',
    gender: 'female'
}];


const data = a.filter(x => x.gender === 'male');

console.log(data);


class Animal {
    constructor() {
        this.type = 'animal'
    }

    getData() {
        var self = this;
        setTimeout(() => {
            console.log(this.type);
        }, 1000);
    }
}

const obj = new Animal();
console.log(obj.getData())