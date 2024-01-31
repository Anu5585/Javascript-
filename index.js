// Dom Manipulation //Dom K lie index.html b banani pry gi
// esy:  chk kr skty  h
// document(window)

// document.getElementById
// document.getElementById('title') // (ye brackets k andr wo likhty h jisko hm ny target krna hota h esy )
// document.getElementById('title').getAttribute('id')
// document.getElementById('title').setAttribute('class' , 'test') // esy (dalny sy hmry html mn attributes over write ho jaty h )

// Diff :
// title.innerText     mn wo content ata h jo actual mn visible hota
// title.textContent    mn  wo content ata h jo sb kch likha h wo a jata h
// title.innerHTMl       a to z tags k sath show krta h

// document.getElementsByClassName('heading')  ye hmy html collections deta h
// document.querySelector('h1') jtny b tags jo hmy chye hoty h wo btao mill jaty h  ismn css k selectors b use kr skty h
// query selector 1st element ko select krta h hmesha

//  queryselector All
// document.querySelectorAll('li')  //Node List deta h

// How to convert html collection?
// Array.from(classlist) // esy array mn convert kry gy thrn woi basic
// document.querySelectorAll('h2')
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>DOM Learning</title>
// </head>
// <body  style="background-color: rgb(190, 105, 105);">
//    <div class="parent">
//     <div id="day">Monday</div>
//     <div id="day">Tuesday</div>
//     <div id="day">WednessDay</div>
//     <div id="day">Thursday</div>
//    </div>
// </body>
// <script>
//  const parent=    document.querySelector('.parent')
//  console.log(parent);
//  console.log(parent.children);
//  console.log(parent.children[1].innerHTML);
//  for (let i = 0; i < parent.children.length; i++) {
//  console.log( parent.children[i].innerHTML);
//  }
//  parent.children[1].style.color = "orange";
//  console.log(parent.firstElementChild);
//  const day  = document.querySelector('.day')
//  console.log(day);
// //  console.log(day.parentElement);
// //  console.log(day.nextElementSibling);
// console.log("Nodes| ", parent.childNodes);

// const div = document.createElement('div')
// console.log(div);
// div.className = "Main"
// // div.id = Math.random()*10 // Random value generate krmy k lie
// div.id = Math.round(Math.random()*10) // Value ko round off krny k lie esy
// div.setAttribute("title", "Generate Title ")
// div.style.backgroundColor = "green"
// div.style.padding  = "15px"
// // div.innerText = "practice "
//  const  addtext = document.createTextNode("Random Text Practice for dom")
// div.appendChild(addtext)
// document.body.appendChild(div)
// </script>

// </html>

// <body style="background-color: black;color: white;">
//     <ul class="language">
//         <li>javascript</li>
//     </ul>
// </body>
// <script> //element create using js  and add language
//     function addLanguage(langName){
//      const li =    document.createElement('li');
//      li.innerHTML = ` ${langName} `
//      document.querySelector('.language').appendChild(li)
//     }
//     addLanguage("Python")
//     addLanguage("Java")

//     function addOptimizeLanguage(langName) {
//        const li =  document.createElement('li')
//        li.appendChild(document.createTextNode(langName))
//        document.querySelector('.language').appendChild(li)
//     }
//     addOptimizeLanguage('golang')

//     //Edit
//     const secondlang = document.querySelector("li:nth-child(2)")
//   const newli=   document.createElement('li')
//   newli.textContent = "Mojo"
//   secondlang.replaceWith(newli) //replace

// //   edit

// const firstlang =document.querySelector("li:first-child")
// firstlang.outerHTML = '<li>TypeScript</li>'

// //Remove

// const lastlang = document.querySelector("li:last-child")
// lastlang.remove()

// <h2>Images</h2>
// <div>
//     <ul id = "Images">
//         <li><img id="photoshop" src="https://source.unsplash.com/300x300/?photoshop,laptop" alt="photoshop"></li>
//         <li><img id="japan" src="https://source.unsplash.com/300x300/?japan,city" alt=""></li>
//         <li><img id="owl" src="https://source.unsplash.com/300x300/?owl,bird" alt="owl" /*onclick="alert('owl')"*/></li>
//         <li><a id="google" style="color: aliceblue;" href="https://google.com">Google</a></li>
//          </ul>
// </div>
// document.getElementById('owl').onclick= function(){
//     alert('owl Clicked')
// }
//best approach for onlick
//what to read in console of this obj from browser  : types , timestamp , defaultPrevented , target , toElement, srcElement  , currentTarget , clientX,ClientY,screenX,screenY , alt key ,ctrl key shift key , keyCode
//attachEvent()
//jQuery - on
// document.getElementById('owl').addEventListener('click', function(e){
//   console.log(e);
// }, false)

// document.getElementById('Images').addEventListener('click', function(e){
//   console.log("Clicked Inside The Ul ");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//   console.log("Simply Owl Clicked ");
//   e.stopPropagation() // is sy stop propagation hota  h
// }, false)
// document.getElementById('google').addEventListener
// ('click', function (e){
//     // e.preventDefault();
//     // e.stopPropagation()
//     // console.log("google clicked ");
// },false)

// pics ya kxh remove krny k lie :
// document.querySelector('#Images').addEventListener('click', function(e){
//     console.log(e.target.parentNode);
//     if (e.target.tagName === 'IMG') {
//         console.log(e.target.id);
//         let removeit = e.target.parentNode
//         removeit.remove()
//     }
// })
// </script>

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>HTML Events </title>
//     <script src="index.js"></script>
// </head>
// <body style="background-color: #414141;color: aliceblue;">
// <h1>Practice</h1>
// <button id="stop">Stop</button>
// </body>
// <script>
//     const sayAnnas = function(){
//         console.log("Annas");
//     }
//    const  changetext = function(){
//     document.querySelector('h1').innerHTML = "Trying"
// }
// //const changeMe = setTimeout(changetext,2000)
// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe)
//     console.log("Stopped");
// })
// </script>
// </html>

/*{ <script>
    const sayDate = function(str){
    console.log(str,Date.now());
    
}
// const interval = setInterval(sayDate,1000, "Hello")
// document.querySelector('#start').addEventListener('click', function(){
//     start(interval)
// })
const intervalId = setInterval(sayDate,1000, "Hello")
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalId)
})
</script> }*/

//generate a random color project

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <!-- <nav>
//         <a href="/" aria-current="page">Home</a>
//         <a target="/blank" href="https://youtube.com">youtube</a>
//     //</nav> -->
//     <h1>Start should change the background color every second</h1>
//     <button id="start">start</button>
//     <button id="stop">stop</button>
//     <script src="index.js"></script>
// </body>
// </html>

// const randomColor =  function (){
//     const hex= "0123456789ABCDEF";
//     let color  =  '#' ;
//     for (let i  = 0; i  < 6; i ++) {
//         color += hex[Math.floor(Math.random()*16)];

//     }
//     return color;
// }
// let intervalId ;
// const startchangingcolor = function (){
//     if(!intervalId){
//         intervalId =  setInterval(changeBgColor , 2000);

//     }

//     function changeBgColor(){
//         document.body.style.backgroundColor = randomColor()

//     }
// };
// const stopchangingcolor = function (){
//     clearInterval(intervalId);
//     intervalId =null;
// };
// document.querySelector("#start").addEventListener('click', startchangingcolor)

// document.querySelector("#stop").addEventListener('click', stopchangingcolor)

// Promises

// const promiseOne = new Promise (function(resolve, reject ){
//     // Do an Async task
//     setTimeout(function()  {
//         console.log('Async task is complete ');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed ");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2 ");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 reolved ");
// })

// const promisethree =  new Promise(function(resolve,reject){
//       setTimeout(function(){
//             resolve({username: "Annas",email: "Annas@gmail.com"})
//       },1000)
// } )

// promisethree.then(function(user){
// console.log(user);
// })

// call back hell

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Anas", pass: "123" });
//     } else {
//       reject("ERROR : Something Went wrong");
//     }
//   }, 2500);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   }).finally(()=> console.log("The Promise has been completed "));


// const promiseFive = new Promise(function (resolve , reject){
//     setTimeout(function () {
//             // let error = false;
//             let error = true;

//             if (!error) {
//               resolve({ username: "Annnnas", pass: "123" });
//             } else {
//               reject("ERROR : Js Went wrong")
//             }
//         },1000)

// });


// async function consumePromiseFive () {
// try {
//     const response = await promiseFive
//  console.log(response);

// } catch (error) {
//     console.log(error);
// }

// }

// consumePromiseFive()


// // API by try catch 
// // https://jsonplaceholder.typicode.com/users

// async function getAllusers(){
//  try {
//     const response = await  fetch('https://jsonplaceholder.typicode.com/users')
//     const  data  =await response.json()
//     console.log(data);
//  } catch (error) {
//     console.log("E: ", error);
//  }
// }

// getAllusers()


// API by .then .catch    but this is easy  bcz async await wagera nai krna prta 


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))