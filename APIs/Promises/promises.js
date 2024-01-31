const promiseOne = new Promise  (function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is comple');
        resolve() // iska maqsad ye h k .then() ko connect kry ga  
    },1000)
})

promiseOne.then(function(){// .then () resolve k sath relation h 
console.log("Promise Consumed");
})


new Promise(function(resolve , reject ){
    setTimeout(function(){
        console.log("Async Task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolve");
})


const promisethree = new Promise( function (resolve , reject){
    setTimeout(function(){
        resolve({username: "Annas", email: "@gmail.com"})
    },1000)
} )
promisethree.then(function(user){
console.log(user);
})


const promisefour = new Promise (function (resolve, reject ){
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username:"Annas",password: "123"})
        }
        else{
            reject('Error SomeThing Went wrong')
        }
    }, 1000);
})

const username = promisefour.then((user)=>{
console.log(user);
return user.username
})
console.log(username);
lo