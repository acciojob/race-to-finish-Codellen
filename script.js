window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise1")
    },1000)
})
window.promises.push(promise1)
let promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise2")
    },2000)
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise3")
        //reject("Timeout")
    },3000)
})
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise4")
        //reject("Timeout")
    },4000)
})
let promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise5")
        //reject("Timeout")
    },5000)
})
Promise.any(window.promises).then((res)=>{
	document.getElementByID("ouput").inneerHtml = `<h1>${res}</h1>`
})











