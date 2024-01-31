
//  Terminal mn chalany k lie
// node open krna h
// terminal mn likhna h = node index.js ya node + apni file ka name

// https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript    is site sy help milly gi ecmascript all coding

// const accountId = 5585
// let accountEmail = "annaskhalid5585@gmail.com"
// var accountPassword = "5585520"
// accountCity = "Islamabad"
// accountCountry = "Pakistan"
// console.table([accountId,accountEmail,accountPassword,accountCity])

// lecture 2

// Data Types
// Number - Integers and Floating Point Numbers
// String - Textual Data (letters, numbers & symbols)
// Boolean - Logical Values: True or False
// Array - Ordered Collection of Items
// Object - Unordered Key Value Pairs
// undefined - A variable that has not been assigned a value yet
// null - An intentionally empty value
// Symbol - unique
// BigInt - Numeric values larger than Number can represent
// Reference Type

// console.log(typeof "hi");

// Lecture 3
// let score = 85
// console.log("My Score Is : ", score)
// if (score >= 60) {
//     console.log('You are Pass')
// } else {
//     console.log('you need to improve your skills')
// }


// let isLoggedIn  = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(`Boolean Is LoggedIn ${booleanIsLoggedIn}`)

// num ko string mn convrt krny  k lie
// let num = 33
// let sNum = String(num)
// console.log(sNum);



// lecture 4

// Operations
//  value ko neg krny k lie
// let value= 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

// let str1 = "Annas "
// let str2 = " khalid"
// let str3 = str1+str2
// console.log(str3);

// let a = 2
// a++; postfix
// ++a; prefix
// console.log(a);


// lecture 4
// comparison

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// === values + data types both chexk krta h very  strickly

// lecture 5
// conditions

// Primitive
// 7types these all are call by value
// 1 = String
// 2 = Number
// 3 = Boolean
// 4 = Null
// 5 = undefined
// 6 = Symbol (ksi b value ko unique banany k lie use krty h )
// 7 = BigInt

// Refernce Type (Non-primitive)
// Arrays , objects  , functions


// arrays :

// const first = ["Annas", "22" , "szabist"]
// console.log("first array: ", first );

// let myObj = {
//     name: "Khalid",
//     age : 50 ,
// }
// console.log(myObj);


//     // Function:
//  const ak = greet()
//  {
//     console.log("Anas");
//  }

// Memory in js
// Stack(Primitive)  jb b stack memory  use hoti means k jo b variable declare kiya uski copy milti h
// Heap(Non-Primitive) or jab b heap use hota h to hmy uska refernce milta h orignal value ka


// let mysite = "Annas.com"
// let another = mysite
// another = "value changed "
// console.log(mysite);
// console.log(another);

// let user = {
//     name:"annas",
//     zip : "user 1 "
// }
// let user2 = user
// // . lga k element jo b chye usko access kr skty h
// user2.zip = "google.com"

// console.log(user.zip);
// console.log(user2.zip);

// lecture 6

// strings

// const name = "Annas"
// const count = 500
// // console.log(name   +  count);  //concatenation or other method :
// console.log(`Hello my Name is ${name} and count is ${count}`);

// const game =  new String('GTA')
// // console.log(game);
// // console.log(game[2]);
// console.log(game.__proto__); //key value pairs dekhny k lie prototype use krty h esy 2 underscore proto then again 2 underscore

// console.log(game.length); //length dekhny k lie
// console.log(game.toUpperCase); //upper case mn keny k lie  dekhny k lie
// console.log(game.charAt(2)); //character match krny k lie
// console.log(game.indexOf(1)); //reverse chk  krny k lie

// const another = game.slice(0,2) //
// const another = game.trim() //  spaces remove kr deta h  white space new line sb py

// const url  = "https://codewithharry.com%20harry" // eg:

// console.log(url.replace('%20', '-'))

// console.log(url.includes('harry')) //koi string chk krni ho jesy k koi string available h ya nai us  k lie


// lecture 7  (Math)


// nums and maths

// const score = 400

// const balance = new Number (100)
// // console.log(balance);// to convert string into number

// // console.log(balance.toString); //characters in 100
// // console.log(balance.toFixed(1)); //points wgra kam kr k set kr deta h


// const onum = 123.55848
// // console.log(onum.toPrecision(4));

// const hunderds = 1000000

// // console.log(hunderds.toLocaleString('en-IN'));


// // console.log(Math);

// // console.log(Math.abs(-4)); // negtive value ko positive mn convert krta h
// // console.log(Math.round(4.8)); //  value ko round off krta h
// // console.log(Math.ceil(4.8)); // value ko round off kr k big value deta h  krta h
// // console.log(Math.floor(4.2)); // value ko round off kr k small value deta h  krta h

// // console.log(Math.min(4,5,8,9,));
// // console.log(Math.max(4,5,8,9,));



// console.log(Math.random()); //0 1 k darmiyan random decimal value ati h
// console.log(Math.random()*10); // 1value letf mn shift hoti h
// console.log((Math.random()*10) + 1 ); // 0 or 9 k darmiyan ki values

// const min = 20
// const max = 200

// console.log(Math.floor(Math.random() * (max - min + 1 ))+ min)    // Math.random 0 or 1 k drmiyan value deti h *10 ka matlb h k vlaues 1 left move hogi bri ho k math.floor vlaue 0 dy ga

// Lecture 8   Dates


// let myDate = new Date()
// console.log(myDate.toString()); // readable hoti h thori date
// console.log(myDate.toLocaleString()); // readable hoti h thori date
// console.log(typeof myDate);

//specific date
// let myCreatedDate  = new Date(2023, 0 , 23)
// // let myCreatedDate  = new Date("01-14-2023")  // esy apmi mrxi ki date dal skty h
// console.log(myCreatedDate.toDateString());



// let myTimeStamp  =  Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));  // seconds mn convert krny k lie


// let newDate = new Date ()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


// Lecture 9  Arrays


// const arr = [ 0,1,2,3,4,5,6, "Annas "]
// console.log (arr[7]);// table view print krna h
// console.log(arr);

// methodss of arrays

// arr.push(10)
// console.log(arr);
// arr.pop()

// arr.unshift(10) // add/insert  element in the start of element
// arr.shift() //remove element in the start
// console.log(arr.includes(25)) //Qs ki trah work krta h
// console.log(arr.indexOf(25)) //Qs ki trah work krta h

// const newArr  = arr.join()
// console.log(arr);
// console.log(newArr); // type change hogi string mn

// slice , splice
// console.log("A" , arr);
// const myn= arr.slice(1,3)
// console.log(myn);

// const myn= arr.splice(1,3)
// console.log(myn);

// Array k andr Array
// const uni = ["Sultan " , "Beenish " , "Danish " ]
// const stu = ["Annas " , "Aswad " , "Hamza " ]
// uni.push(stu)
// console.log(uni);

// Concatenation esy array mn
// const uni = ["Sultan " , "Beenish " , "Danish " ]
// const stu = ["Annas " , "Aswad " , "Hamza " ]
// const all = uni.concat(stu)   // new element bnaa prta h
// console.log(all);// array ka concat mein jayega

// Array mn values spread krny k lie esy kry gy
// const insert = [ 1,2,3,4,5,[6,7,8,9],10,[6,7],[4,5]]
// const another =  insert.flat(Infinity)
// console.log(another);
//array banny k lie
// console.log(Array.isArray("Annas"))
// console.log(Array.from("Annas"))

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));


// Chapter 10 // Objects
//  singelyton
// object literls
// Object.create
// symbol declare esy krty h :
// const sym = Symbol("key 1")

// const jsuser =  { // ye braces objects hoty h
// name:"Annas ",
// [sym] : "key 1 ",
// age:'20',
// gender:'male',
// hobbies : ['Cricket','Music'],
// isLoggedIn : false,
// }
// console.log('jsuser ',jsuser );
// console.log(jsuser.age);
// console.log(`My name is ${jsuser['name']} and my age is ${jsuser["age"]}`);
//key ko access karnY ka tareeqa :
// console.log(jsuser[sym]);
// console.log(jsuser);

// object ko change krny ka tareeqa :
// jsuser.name = "AnnasKhalid"
// hm chaty h k hamara object change na ho to usko esy freeze kr skty h usk bad koi b changes nai hon gy
// Object.freeze(jsuser);
// delete (jsuser.name)// delete key yn ase wale gausky h
// jsuser.greeting = function () {
//     console.log("Hello Js User ");
// }
// console.log(jsuser.greeting());
// //object ko clone krny k tareeqa :
// jsuser.greeting2 = function () {
//     console.log(`Hello Js User ${this.name}`);
// }
// console.log(jsuser.greeting2());
// object declare 2no tareeqo sy
// const tinder =  new Object()
// const tinder = {}
// tinder.id ='5585'
// tinder.name = "Annas"
// tinder.isLoggedIn = false

// // console.log(tinder);

// // objects k andr objects mazeed

// const user = {
//     email: "Ak@gmail.com ",
//     fullname: {
//         username:{
//             firstname: "Annas",
//             lastname: "khalid"
//         }
//     }
// }
// // console.log(user.fullname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// // 2 Arrays ko join krny k lie concatenate krny k lie :
// // const join = {obj1 , obj2}
// const join = Object.assign( obj1 , obj2)

// // values spread / alag krny k lie :
// const obj3 = {...obj1, ...obj2}
// console.log(join);
// console.log(obj3);


// Desturcturing

// const course = {
//     coursename  : "javascript",
//     courseprice : '999',
//     courseteacher: "youtube"
// }
// const {courseteacher : teacher } =  course    // courseteacher ko destruct kr k sirf teacher bol dia h ansswer same aye ga ye hoti   h destructuirng
// console.log(courseteacher);

//  Object hi hmara json hota h {}
// {
//     "name" : "Annas ",
//     "cname": "js",
//     "price": "free"
// }




// chapter 11 //Functions and parameters

// function myname (){
//     console.log("My name is 1");
//     console.log("My name is 2");
//     console.log("My name is 3");
//     console.log("My name is 4");
//     console.log("My name is 5");
//     console.log("My name is 6");
// }
// myname()

// function addTwoNumbers (num1,num2){
//     console.log( num1 + num2)   /// return keyword used to give output value from a funtion
// }
// addTwoNumbers(5, 5)

// function addTwoNumbers (num1,num2){
// //   let result = num1 + num2
// //   return result
// // or esy b :
// return num1 + num2
// }
// const result = addTwoNumbers(5, 5)
// console.log("result" , result)


// function with backtics ``

// function loginUserMessage(username){
//     if(username === undefined){
// console.log("plz enter a username ");
//     }
//     return `Welcome ${username} just Logged  in `    //// string interpolation in js
// }
// console.log(loginUserMessage("Annas"))

// eg : hmy agr ni pta k user ktni values daly ga add to cart k lie to us  k lie hm esy kry gy
// function calculateCartPrice(...num1){ // ... rest / spread operator bolty h inko
// return num1

// }
// console.log(calculateCartPrice(2,5,6,8,9))

// const User = {
//     username : "Anas" ,
//     price : 200
// }

// function handleobject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleobject(User)

// const myNewArray = [ 200, 400 ,100 , 600 ]
// function returnSecondValue (getArray){
// return getArray[2]
// }
// console.log(returnSecondValue(myNewArray));


// Chapter 12 Global and local scope



// {}// scope
// if(true) //block scope  {

//     let a= 10
//     const b = 20
//     var  c=  30

// }


// console.log(a);
// console.log(b);
// console.log(c);   //Global scope

// nested scope

// function one(){
//     const username = "annas"

//     function two (){
//         const website ="Youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }

// one()


// if (true) {
//     const username = "Annas "
//     if (username === "Annas") {
//         const website  = "YouTube "
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// // console.log(username);


// function addone(num) {
//  return num+1

// }
// console.log(addone(5))


// function addTwo = function(num){
//     return num + 2
// }



//  Chapter 12 Arrow Functions

// const user = {
//     username : "Annas" ,
//     price : 999 ,
//     welcomeMessage  : function(){
//         console.log(`${this.username} , welcome to website`);   //this ka mtlb h currrent contex mtlb : (values) ko refer krta b h
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// // console.log(this);  // node mn this hmy {} empty dyta h


// function one(){
//     let username = "Annas"
//     console.log(this);
// }
// one()


// const ak   = ()=> {
// let username = "Annas "
//     console.log(this);
// }

// ak()

// const addTwo = (num1 ,num2 ) =>{
//     return num1 + num2

// }
// console.log(addTwo(25, 30))

// implicit return esy b ho skta
// const addTwo = (num1 ,num2 ) =>  num1 + num2
// const addTwo = (num1 ,num2 ) => ({username: "Annas"})

// console.log(addTwo(25, 30))

// const Array =[2,5,6,8,2,8,9,8]
// Array.forEach()

// Chapter 13 IIFE immediately invoked function expression

// function IIFE(){
//     console.log(`DB Connection`)
// }
// IIFE()

// IIFE k lie pury fn ko  () mn dal do esy  :

// (function IIFE(){
//     console.log(`DB Connection`)
// })()

// now arrow fn in IIFE    2 IIFE use krny k lie ; must h

// ( () => {
//     // let username = "SK"
// console.log(`DB Connection ${username}`);
// }) ()



// Chapter 14  Control / Logic Flow

// const isUserLoggedIn = true    // < > <= >= == != ===            == condtion check for equal     ===  for strick checking with Data type

// const tempratue = 40
// if (tempratue < 50 ) {
//     console.log("less then 50");
// }
// else
//   console.log("Temp is greater then 50");


// const score  = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`)
// }


// Short Hand Notation
// const balance = 1000
// // if (balance > 500) console.log("test");

// if(balance < 500)
// {
//     console.log("Less then 500 ");
// }
// else if (balance <750)
// {
//     console.log("Less then 750");
// }
// else if(balance < 900){
//     console.log("Less then 900");
// }
// else{
//     console.log('More than 900');
// }


// const UserLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (UserLoggedIn && debitCard) {
//     console.log("Allow to Buy Courses ");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User Logged in ");
// }
// Now Switch
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


// const month  = 3

// switch (month) {
//     case 1 :
//         console.log("Jan");
//         break;
//     case 2 :
//         console.log("Feb");
//         break;
//     case 3 :
//         console.log("March");
//         break;
//     case 4 :
//         console.log("April");
//         break;
//     case 5 :
//         console.log("May");
//         break;

//     default:
//         console.log("Not Found");
//         break;
// }


// const userEmail = ""
// if (userEmail) {
//     console.log("Got Email");
// }
// else{
//     console.log("Dont Have email");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0 ) // Empty Obj ko Calculate krny k lie
// {
//     console.log("Object is empty ");
// }


// Nulish Coalescing Operator (??) : null undefined

// let  val1;
// val1 ??= 5 ?? 10 ;
// val1 = null ?? 10
// val1 =undefined ??15
// val1 = null ?? 10 ?? 15
// console.log(val1);

// Terniary Operator
// condition ?? true : false
// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("Buy Ice tea" ) : console.log("Expensive")


// Chapter 15   Loops

// for loop
// for (let i= 0 ; i < 10; i++)
// {
//     const element =  i;
//     console.log(element )
// }
// let myArray = ["flash ", "batman  ", "superman"]
// for (let i = 0; i <Array.length; i++) {
//     console.log(`Outer Loop ${i}`);
//    for(let j = 0 ; j<= 10 ; j++){
// console.log(`Inner Loop value ${j } and inner Loop ${i}`)
//    }
//     console.log(myArray);
// }



//break and continue

// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`Value of i is ${index}`);

// }

//continue
// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log('Detected 5');
//         continue
//     }
//     console.log(`Value of i is ${index}`);

// }

// While Loop

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index} `);
//     index = index + 2
// }

// While Loop

// let myArray = [" Flash ", " BatMan " , " Superman "]
// let arr = 0
// while (arr <myArray.length) {
//     console.log(`value is ${myArray[arr]}`);
//     arr = arr+1 ;
// }

// Do While Loop
// let score =1
// do{
// console.log(`score is ${score }`);
// score++
// }
// while(score<=10)


// Loop on Array
//  For of Loop


// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }


// const greeting = "Annas khalid "
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`)
// }


// // Maps  = Always unique and jis order mn value di h usi order mn hi  rhy gi

// const map = new Map ()
// map.set('Pk', "Pakistan ")
// map.set('USA', "United states of America  ")
// map.set('Fr', "France ")

//
// console.log(map);

// for (const [key ,value]  of map) {
//     console.log(key, ':- ' , value);
// }


// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman',

// }
// Not Working
// for (const [key, value] of myObject) {
//     console.log(key , ':- ', value);
// }


// const myObject = {
//     js: 'Javascript ',
//     cpp: 'C++ ',
//     rb : "ruby",
//     swift : "Swift by Apple "
// }
// Objects k lie  FOR IN Loop
// for (const key in myObject) {
// //    console.log(`${key} ShortCut is for ${myObject[key]}`);
// }


// const programming = [ "js ", "c++", "java ", "rb"]

// for (const key in programming) {
// //    console.log(key); //keys ati hn
// console.log(programming[key]); //Values ati hn
// }


// const map = new Map ()
// map.set('Pk', "Pakistan ")
// map.set('USA', "United states of America  ")
// map.set('Fr', "France ")
//no output :
// for (const key in map) {
// console.log(key);
// }


// For Each Loop

// const coding = [ "js ", "ruby ","python", "java " , "cpp"]

// coding.forEach( function  (val )  { //call back function h  or call back mn function ka name nai hota
// console.log(val);
// })


// coding.forEach( (item)=>{
//     console.log("item");
// } )

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)
//  sb kch show krny k lie  : esy
// coding.forEach( (item, index , arr)=>{
//     console.log(item, index,arr);
// } )
// For db
// const myCoding = [
//     {
//         languageName: "js",
//         languageFileName : "java"
//     },
//     {
//         languageName: "cpp",
//         languageFileName : "Basic"
//     },
//     {
//         languageName: "python",
//         languageFileName : "Adv"
//     }
// ]

//  Database sy value hmesha array/ object ki form mn ati h us ko use krny k lie hmesha forEach loop use krna h wo  esy :

// myCoding.forEach((item)=>{
//     console.log(item.languageName)
// })

//  for each koi value return nai krta
// const coding = [ "js ", "ruby ","python", "java " , "cpp"]
// const values = coding.forEach ( (item) =>{
//     console.log(`${item} is a good programming langauge`);
// } )
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4 ) //filter calback e deta h jis m har value ko each acess krta h usk bad condition deni hoti h jb filter mn scope{} use krty h to hmesha return use krna pry ga tb e output mily ga esy : dono ka same tareqa sy kr skty h :
// const newNums = myNums.filter( (num) =>{
//     return num> 4
// } )
// console.log(newNums);

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums)

//  API api is : run api
// const books = [

//             {
//                 "kind": "books#volume",
//                 "id": "_ojXNuzgHRcC",
//                 "etag": "OTD2tB19qn4",
//                 "selfLink": "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
//                 "volumeInfo": {
//                     "title": "Flowers",
//                     "authors": [
//                         "Vijaya Khisty Bodach"
//                     ],
//                 }
//             },
//             {
//                 "kind": "books#volume",
//                 "id": "RJxWIQOvoZUC",
//                 "etag": "NsxMT6kCCVs",
//                 "selfLink": "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
//                 "volumeInfo": {
//                     "title": "Flowers",
//                     "authors": [
//                         "Gail Saunders-Smith"
//                     ],
//                 }
//             },
//             {
//                 "kind": "books#volume",
//                 "id": "zaRoX10_UsMC",
//                 "etag": "pm1sLMgKfMA",
//                 "selfLink": "https://www.googleapis.com/books/v1/volumes/zaRoX10_UsMC",
//                 "volumeInfo": {
//                     "title": "Flowers",
//                     "authors": [
//                         "Paul McEvoy"
//                     ]
//                 },
//             }
//     ];
// const userbooks = books.filter((bk) => bk.kind === 'books#volume') or essy  b kr skty h
// const userbooks = books.filter ( (bk)=> {bk.volumeInfo === 'Flowers'} )
// console.log(userbooks);
// map use :

// const myNums = [1, 2, 3,4,5,6,7,8,9,10]

// const newNums = myNums.map(  (num)=>num+10 )
// console.log(newNums);
//Maps and filters
// const  newNums = myNums.map((num)=> num*10 )
// .map( (num)=> num  +1  )
// .filter  ( (num)=> num >=40 )
// console.log(newNums);

// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal : ${currVal}`);
//     return acc + currVal
//  },3 )

//  console.log(myTotal);