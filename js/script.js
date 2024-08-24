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

// setInterval(() => {
//         console.log("hello wrold")
        
// }, 5000);



// 24 callback methods


// function cb(){
//     console.log("callback function")
// }
// function s(a,bb){
//     console.log("hello function",a)
//     bb()
// }
// s(90,cb)

// 25 Promises

// var p = new Promise( (res,rej)=>{
//     setTimeout(()=>{
//         rej("your promise is rejected")
//     }, 2000)
// }).then( data=> {
//     console.log(data)
// }).catch( err=> {
//     console.log(err)
// })
// console.log(p)


// 26 async / await

// async function s(){
//     await fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.error('Error:', error));
// }
// s();

// 27 class / OOP

// class Student{
//     setData(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getData(){
//         return `Name: ${this.name}, Age: ${this.age}`
//     }
// }
// var s1 = new Student();
// s1.setData("Ashutosh",28)
// console.log(s1.getData())

// var s2 = new Student();
// s2.setData("Ahmad",23)
// console.log(s2.getData())


// class Student{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getData(){
//         return `Name: ${this.name}, Age: ${this.age}`
//     }
// }
// var s1 = new Student("Ashutosh",28);
// console.log(s1.getData())

// var s2 = new Student("Ahmad",23);
// console.log(s2.getData())

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Dog extends Animal{
//     getData(){
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }
// var d = new Dog("puppy",12)
// console.log(d.getData())

// class Employee{
//     constructor(name,salary){
//         this.name = name;
//         this.salary = salary;
//     }
//     getData(){
//         var sly = this.salary + 29000
//         return `Name: ${this.name}, Salary: ${sly}`;
//     }
// }
// var slry = new Employee("Ashutosh",990000)
// console.log(slry.getData())

class Shape{
    show(){
        console.log("I am a shape")
    }
}
class Circle{
    show(){
        console.log("I am a Circle")
    }
}
class Square{
    show(){
        console.log("I am a Square")
    }
}

var s = new Shape()
s.show()
var sq = new Square()
sq.show()
var c = new Circle()
c.show()
        
