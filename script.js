// variables,let,const
var x = 30;
var x = 10;// var can be declared many times and can be update many times
x=6;
console.log(x);

let y = 10;// let can be declared only once and can be update many times
y=5;
console.log(y)

const z = 20;// const can be declared only once and can't be update
console.log(z)

//numbers,string,boolean,character
let s='shiva' //string
let m='A' //char
let istrue= false // boolean
let n=10.5; // number
console.log(typeof(s))
console.log(typeof(m))
console.log(typeof(istrue))
console.log(typeof(n))

//arithmetics
var sum = x+y;
console.log(sum);
var mul = x*y;
console.log(mul);
var div = x/z
console.log(div)
var modlus = z%y
console.log(modlus)
var sub = x-y-z;
console.log(sub);
let islogin=true
console.log(islogin)

//logical operations & conditions
if (z>=y && z>=x){
    console.log('&& operator is true')// if is always it is true true= 1 false=0
}
else{
    console.log('&& operator is false')// else is always false statement
}
(z>x || y>x)? console.log('Or(||) operator is true by using ternary operator'):console.log('|| is it is false statement')

//(condition) ?1:0; ternary operator format

if(x>!z){

}










let mm = 'sid';
let ms = 'sidd';
let zz = 4;
switch(zz){
    case 'sid':console.log('switch statement is right')
    break;
    case 'ss': console.log('case2 output')
    break;
    case 'sidd':console.log('case3 output')
    break;
    case 4: console.log('case 4 output')
    break;
    default: console.log('switch statment is gone wrong')
}



