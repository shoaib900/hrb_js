// alert("hello world")

// 17 DOM id

// var rgn = Math.round( Math.random() * 10)
// console.log(rgn);
// function s(){
//     var input = parseInt( prompt("Enter the number") )

//     if( input === rgn){
//         var b = document.getElementById("demo")
//         b.style.backgroundColor = "red"
//         document.getElementById("text").innerHTML = " your answer is right"
//     }else{
//         var b = document.getElementById("demo")
//         b.style.backgroundColor = "black"
//         document.getElementById("text").innerHTML = "<h1>your answer is wrong </h1>"
//           document.getElementById("text").style.color = "red"
//     }
// }

// 18 objects

// var obj1 = {
//   name: "John",
//   "first name": "Doe",
//   age: 30,
//   city: "New York",
//   skills: ["JavaScript", "Python", "Java"],
//   topic: { name: "Python", level: "advanced" },
//   fullname: function () {
//     return `${this.name} ${this["first name"]}`;
//   },
// };

// function s(){
//         console.log("function declarations")
// }
// const s = function(){
//         console.log("function expressions")
// }

// delete obj1.topic.name;
// obj1.topic.name1 = "hello world"
// console.log(obj1.topic);

// console.log(obj1.fullname())
// console.log(obj1.name);
// console.log(obj1["first name"]);
// console.log(obj1["name"]);
// console.log(obj1);
// console.log( `${obj1.age} ${obj1.city}` );

// obj1.name = "Ashutosh"
// obj1["name"] = "Ashutosh"

// obj1["last name"] = "Patel"

// delete obj1.name
// delete obj1["first name"]

// delete obj1

// console.log(obj1)

// 19 destucture Objects

// var obj = {
//   name: "John",
//   age: 25,
//   city: "New York",
//   skills: ["JavaScript", "Python", "Java"],
// };

// var { name, age, city, skills } = obj;

// console.log(obj.name, name)
// console.log(obj.age,age)

// 20 Date Objects

// var d = new Date("june 22, 2022");

// console.log(d);
// console.log(d.getDay() + 1);
// console.log(d.getDate());
// console.log(d.getFullYear());

// 21 exceptional handling

// let x=10
// try {
//         console.log(x);
// }catch(error){
//         console.log(error)
// }finally{
//         console.log("finally error handling")
// }

//   primitive and non-primitive types

// var a = 10;
// var b = a;
// console.log(a,b);
// a = 20;
// console.log(a,b);

// var obj = {name: "John", age: 25};
// var obj2 = obj;
// console.log(obj, obj2);
// obj.name = "Ashutosh";
// console.log(obj, obj2);

// 22 Debugger

// var a = 10;
// console.log(a)
// debugger;

// var b = 20;
// console.log(b)
// debugger;

// console.log(c);

// 23 setTimeout / setInterval / async functions

// console.log("B")
// setTimeout( ()=>{
//         console.log("C")
// },1)
// setTimeout(()=>{
//         console.log("Pakistan Zindabad")
// }, 0 );
// console.log("A")

// setTimeout(() => {
//         for(var i=0; i<10; i++){
//                 console.log(i)
//         }

// }, 0);

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log("pakistan",i);
//   }, 0);
// }

setInterval(() => {
        console.log("hello wrold")
        
}, 5000);

// 24 callback methods
// 25 Promises
// 26 async / await
// 27 class / OOP
// 28 DOM Manipulations
