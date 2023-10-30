// ===================== Control flow =====================

// let a = false;
// if(20 == "20" || 2 !=2){
//     console.log("execute");
// }else{
//     console.log("the condition is false");
// }

// let key = "march"
// switch (key) {
//     case "jan":
//         console.log("jan");
//         // break;
//     case "feb":
//         console.log("feb");
//         // break;
//     case "march":
//         console.log("march");
//         // break;
//     case "april":
//         console.log("april");
//         // break;
//     case "may":
//         console.log("may");
//         // break;

//     default:
//         console.log("Not found anything");
//         break;
// }

// let a = ' ';
// if(a){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let obj = {};

// if(Object.keys(obj).length ==0){
// console.log("Object empty");
// }
// 1
// let b = null ?? undefined ?? 20;
// console.log(b);

// b ==20 ? console.log(true) : console.log(false);;

// for(let i =1; i<+ 10; i++){
//     for(let j =1; j <=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
//     console.log(" ");
// }

// let i =0;
// while (i <=10) {
//     console.log(i);
//     i++;
// }
// let i=0;
// do {
//     console.log(i);
//     i++
// } while (i <=10);

// let arr = [10,20,30,40,50,60];
// let obj ={
//     name : "Kunal",
//     class: "a",
//     rollNo :10
// }

// for (const key of arr) {
//     console.log(key);
// }
// for (const key of obj) {  ======> Not iterable
//     console.log(key);
// }

// for (const key in obj) {
//     console.log(obj[key]);rrrrrrr
// }
// for (const key in arr) {
//     console.log(arr[key]);
// }
// arr.forEach()

let arr = [1,2,3,4,5,6];

// let newNumbers = arr.filter((num)=> num >=5
// )

// let newNumbers = arr.map((num)=>{
//     return num +10
// })

// let newNumbers = arr.filter((acc, curr)=>{
//     return acc + curr;
// },0)

// let newNumbers = arr.filter((acc, cum)=>{
//     return acc + cum
// },0)
// console.log(newNumbers);


// +=======+============== Error handling

function convertToINR(dollar){
   if(typeof dollar === "number"){
    return dollar * 82;
   }else{
    throw Error("The number should be number")
   }
}

try {
    console.log(convertToINR(5));
} catch (error) {
    console.log(error);
}

console.log("Execute");