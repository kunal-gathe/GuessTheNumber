// let a = "42";
// let b = Number(a);
// // console.log(typeof a, typeof b); // explicity coercion

// let c = "42";
// let d = c * 2;
// // console.log(d);
// // console.log(typeof a, typeof b);  // implicit coercion

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [1, 2, 3, 4, 5];
// let str = "1,2,3,4,5";

// // console.log( typeof arr1 );

// var a1 = 10;

// {
//   var a1 = 15;
// }
// // console.log(a1);

// var e = 2;
// foo(); // works because `foo()`
// // declaration is "hoisted"
// function foo() {
//   e = 3;
//   //  console.log(e ); // 3
//   var e; // declaration is "hoisted"
//   // to the top of `foo()`
// }
// // console.log(e );

// // Hoisting

// // great()
// // console.log(af);
// var great = () => {
//   // console.log("Good Morning");
// };

// var af = 10;

// // Nested Loops

// function foo() {
//   var a = 1;
//   function bar() {
//     var b = 2;
//     console.log(a, b);

//     function baz() {
//       var c = 3;
//       console.log(a, b, c);
//     }
//     baz();
//   }
//   bar();
//   console.log(b,c);
// }

// foo();

// function strick(){
//   "use strict";
//   a = 1;
// }

// var foo = function(){
//   console.log("foo");
// }
// // foo()

// var bar = function baz(){
//   console.log("baz");
// }
// baz()

// (function IIFE(){
//   console.log( "Hello!" );
//  })();

// console.log(a);
// let a =10;

function outer(){
  let userName = "Kunal";

   function inner(){
    let course = " JavaScript"
    console.log(userName + course)
   }
   inner()
  //  console.log(course); ReferenceError: course is not defined 
}
// outer()

function sum(a){
  console.log("Addition");
  let c = 3;
  return function (b) {
    return a+b+c;
  }
}
// let add = sum(2);
// console.log(add(4)); //9

function sum(a,b,c){
  console.log("addition");

  return {
     getSum2 : function() {
      return a+b
    },
    getSum3 : function(){
      return a+b+c
    }
  }
}
// let add = sum(2,3,4);
// console.log(add.getSum2())
// console.log(add.getSum3())

// (function printHello(){
//   console.log("Hello");
// })();

// ((name)=> {
//   console.log("hi",name);
// })("Kunal")

// const obj ={
//   name : "kunal",

//   sum : function(){
//     console.log(this.name);
//   }
// }
// obj.sum()
`````````
let obj = {
  name: "kunal",
  city: "chandrapur",

  getIntro : function (){
    console.log(this.name + " from " + this.city);
  }
}`````````

let arr = [ "kunal" , " harsha"];