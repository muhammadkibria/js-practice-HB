let demo = document.getElementById("demo");

/* Learn with Sumit javascript bangla tutorial 17*/

// indexOf
// let string = "hi there, my name is mridul hosen kibria"
// var check = string.indexOf("kibria");
// console.log(check);
// document.getElementById("demo").innerHTML = check

// lastIndexOf
// let string = "hi there, my name is mridul hosen kibria mridul"
// var check = string.lastIndexOf("mridul");
// console.log(check);
// document.getElementById("demo").innerHTML = check

// includes
// let string = "hi there, my name is mridul hosen kibria mridul"
// var check = string.includes("my", 20);
// console.log(check);
// document.getElementById("demo").innerHTML = check

// startWith
// let string = "Hi there, my name is mridul hosen kibria mridul"
// var StrLowerCase = string.toLowerCase()
// var check = StrLowerCase.startsWith("hi");
// console.log(check);
// document.getElementById("demo").innerHTML = check

// endsWith
// let string = "Hi there, my name is mridul hosen kibria mridul"
// var StrLowerCase = string.toLowerCase()
// var check = StrLowerCase.endsWith("hosen", 33);
// console.log(check);
// document.getElementById("demo").innerHTML = check

/* Learn with Sumit javascript bangla tutorial 18*/

//    var country = "Bangladesh"

//    var sentence = `I love my country ${country}.`

//    document.getElementById("demo").innerHTML = sentence

/* Learn with Sumit javascript bangla tutorial 24*/

//    foreach loop
// const numbers = [20, 24, 23, 54, 64];

// function myFunction(value, index){
//     console.log(value);
//     console.log(index);
// }

// numbers.forEach(myFunction);

// const numbers = [20, 30, 40, 5, 60, 70]

// function myFunction(total, value, array, index){
//     console.log(total)
//     return total + value;
// }

// const numbersWrapper = numbers.reduce(myFunction, 10);
// console.log(numbersWrapper)

// array from
// console.log(Array.from("abc defg hij klim"))

// students name short by alphabetically
// const students = ["Mridul", "Emon", "Akash", "Towhid", "Sakib", "Babar", "Dihan"];
// const result = students.sort();
// console.log(result)

// roll numbers short by numberly
// const rollNumbers = [10, 23, 45, 53, 12, 43, 53, 34]

// const result = rollNumbers.sort(function(a, b){
//     return a-b;
// });
// console.log(result)

// How many vowel available in a word
// const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

// function countVowels(sentence){
//     var count = 0;
//     var letter = Array.from(sentence);
//     letter.forEach(myFunction);

//     function myFunction(value){
//         if(vowel.includes(value) === true){
//             count++;
//         }
//     }
//         console.log(count)
// }

// countVowels("I love my country bangladesh")

// find duplicate number
// const numbers = [12, 34, 5, 12, 4, 56, 5, 43];
// const duplicate = numbers.filter(function(value, index, array){
//     return array.indexOf(value) !== index
// });
// console.log(duplicate)

// for in loop

// example-1
// const person = {fname:"Mridul", lname:"Hosen", Age:21}

// for(let x in person){
//     console.log(person[x]);
// }

// example-2
// const numbers = [23, 43, 45,23, 543,25]

// for(let number in numbers){
//     console.log(numbers[number])
// }

// for of loop
// const name = ["Mridul", "Abir"];
// for(x of name){
//     console.log(x)
// }

// while loop
// let i = 0;
// let text = "";

// while (i < 10) {
//     text += "number is " + i+"\n";
//     i++
// }
//     console.log(text)

// break tag
// for(var i = 1; i < 10; i++){
//     if(i === 4){
//         break;
//     }
//         console.log("break tag number is "+i)
// }

// // continue tag
// for(var i = 1; i < 10; i++){
//     if(i === 4){
//         continue;
//     }
//         console.log("continue tag number is "+i)
// }

// const set = new Set();
// set.add("a");
// set.add("arman");
// set.add("emon");
// set.add("towhid");
// set.add("Mridul");
// set.add("Mridul");

// console.log(set)
// string convert to number
// const a = "10";
// const b = Number(a)
// console.log(b)

// let a = 10.3435;
// console.log(a.toPrecision(3))

// let d = new Date();
// console.log(d)

// regular expression
// replace method
// const text = "lets start something new and find New One";
// document.getElementById("demo").innerHTML = text;

// function TryItBtn(){
// const result = text.replace(/New/gi, "old")
// document.getElementById("demo").innerHTML = result;
// }

// match method
// const text = "lets start something new and find New One";
// document.getElementById("demo").innerHTML = text;

// function TryItBtn(){
// const result = text.match(/(new)/gi)
// document.getElementById("demo").innerHTML = result;
// }

// var car = "Farari";
// console.log(window.car)

// javascript class
// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
//     model(){
//         console.log(this.year)
//     }
// }

// const car1 = new Car("Toyota", 2016);

// car1.model()

// let Person = '{ "employees" : [' +
//     '{ "firstName":"John" , "lastName":"Doe" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const test = JSON.parse(Person)

// console.log(test)
// console.log(Person)

// console.log(test.employees[2].firstName)

// let car = {
//     name:"Toyota",
//     model:"2018"
// }

// console.log(JSON.stringify(car))

// // find the largest string and that string's index from array

// function longestString(names){
//     let longestWord = "";

//     for(name of names){
//         if(name.length > longestWord.length){
//             longestWord = name;
//         }
//     }
//     return[longestWord, names.indexOf(longestWord)]

// }

// console.log(longestString(["s","Mridul Hosen", "Mridul", "Kibria", "Muhammad Mridul Hosen Kibria", "Muhammad Kibria", "Muhammad Mridul Kibria"]))

// const number = 100;

// for(let i = 1; i < number; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} fizzbuzz (3-5)`);
//     }
//     else if(i % 3 === 0){
//         console.log(`${i} fizz (3)`);
//     }else if(i % 5 === 0){
//         console.log(`${i} buzz (5)`);
//     }else{
//         console.log(i)
//     }
// }

// // remove the falsy value from array
// const mixedArray = [
//     "true",
//     "false",
//     "Midul",
//     "",
//     10,
//     null
// ]

// const resultArray = mixedArray.filter(Boolean)
// console.log(resultArray)

// remove the falsy value from object

// const mixedArray = {
//     a:"mridul",
//     b:false,
//     c:true,
//     d:1,
//     e:"undefined"
// }

// const truthyObject = function(mixedArray){
//     for(let i in mixedArray){
//         if(!mixedArray[i]){
//             delete mixedArray[i]
//         }
//     }
//     return mixedArray;
// }
// console.log(truthyObject(mixedArray))

// function Person(fName, lName, age){
//     this.firstName = fName;
//     this.lastName  = lName;
//     this.Age       = age;
//     this.fullName  = function(){
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const mridul = new Person("Muhammad", "Mridul", 21);
// mridul.country = "Bangladesh";
// console.log(mridul);

// Object make iterator
// const numbers = {};

// numbers[Symbol.iterator] = function () {
//     let n = 0;
//     let done = false;

//     return {
//         next() {
//             n += 10;
//             if (n == 100) {done = true} {
//                 return {
//                     value: n,
//                     done: done,
//                 }
//             }
//         }
//     }
// }
// for (let number of numbers) {
//     console.log(number)
// }
// // console.dir(numbers)

// class Car {
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     run(speed){
//         console.log(this.name + ` is running in ` + speed)
//     }
// }

// const bmw = new Car("BMW", 1999);
// const audi = new Car("Audi", 2006);

// bmw.run("100 km per hour")

// function calculator(num1, num2, callback){
//     let sum = num1 + num2;
//     if(callback) callback(sum);
//     return sum
// }

// calculator(5, 12, function(result){
//     console.log(result)
// })

// javascript promises
// const status = false;

// console.log("task 1");

// promise definition
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         if(status){
//             resolve("task 2");
//         }else{
//             reject("failed")
//         }
//     },2000)
// })

// // promise call
// promise
// .then(function(value){
//     console.log(value)
// })
// .catch(function(err){
//     console.log(err);
// })

// console.log("task 3");

// callback, promise & async wait
// const marks = 84;
// const paymentSuccess = true

// function enrooll() {
//     document.getElementById("demo").innerHTML = "Course enrollments is in progress.";

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (paymentSuccess) {
//                 resolve()
//             } else {
//                 reject(document.getElementById("demo").innerHTML = "Payment failed")
//             }
//         }, 2000)
//     })

//     return promise;

// }

// function progress() {
//     document.getElementById("demo").innerHTML = "Course on progress";

//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (marks >= 80) {
//                 resolve()
//             } else {
//                 reject(document.getElementById("demo").innerHTML = "You don't have enough marks to get certificate")
//             }
//         }, 3000)
//     })

//     return promise;
// }

// function certificate() {
//     document.getElementById("demo").innerHTML = "Preparing your certificate";

//     const promise = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(document.getElementById("demo").innerHTML = "Congrats! You got the certificate")
//         }, 1000)
//     })

//     return promise;

// }

// async function course() {
//     try {
//         await enrooll();
//         await progress();
//         const message = await certificate();

//         document.getElementById("demo").innerHTML = message
//     } catch (err) {
//         console.log(err)
//     }
// }

// course()

/*DOM Practice*/

// change image src
// const element = document.getElementById("image");
// element.src = "test2.jpg"

// form validation
// function validateForm(){
//     let value = document.forms["myForm"]["fname"].value;
//     if(value == ""){
//         alert("You must enter your name")
//         return false
//     }else{
//         return true
//     }
// }

// input field validation
// function validation(){
//     const input = document.getElementById("id1");

//     if(input.checkValidity()){
//         document.getElementById("demo").innerHTML = "Number Is Perfect"
//     }else{
//         document.getElementById("demo").innerHTML = input.validationMessage
//     }
// }

// async function getData(){
//     const res = await fetch("http://127.0.0.1:5500/data.txt")
//     const result = await res.text()
//     demo.innerHTML = result;
// }

// function getData(){
//     fetch("http://127.0.0.1:5500/data.txt")
//         .then((res => res.text()))
//         .then((data) =>{
//             demo.innerHTML = data
//         })
// }

/*geolocation*/

// function getLocation() {
//   if (navigator.geolocation) {
//     // navigator.geolocation.getCurrentPosition(showPosition, showError);
//     navigator.geolocation.watchPosition(showPosition, showError);
//   } else {
//     demo.innerHTML = "GeoLocation Not Available In Your Browser";
//   }
// }

// function showPosition(position) {
//   demo.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "</br>Longitude: " +
//     position.coords.longitude +
//     "</br>Accuracy: " +
//     position.coords.accuracy +
//     "</br>Altitude: " +
//     position.coords.altitude +
//     "</br>AltitudeAccuracy: " +
//     position.coords.altitudeAccuracy +
//     "</br>Heading: " +
//     position.coords.heading +
//     "</br>Speed: " +
//     position.coords.speed +
//     "</br>Timestamp: " +
//     position.timestamp;
// }

// function showError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       demo.innerHTML = "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       demo.innerHTML = "Location information is unavailable.";
//       break;
//     case error.TIMEOUT:
//       demo.innerHTML = "The request to get user location timed out.";
//       break;
//     case error.UNKNOWN_ERROR:
//       demo.innerHTML = "An unknown error occurred.";
//       break;
//   }
// }

function onData(){
    XHR = new XMLHttpRequest;

    XHR.onload = function(){
        demo.innerHTML = XHR.responseText
    }

    XHR.open("GET", "https://jsonplaceholder.typicode.com/photos");

    XHR.send()
}



