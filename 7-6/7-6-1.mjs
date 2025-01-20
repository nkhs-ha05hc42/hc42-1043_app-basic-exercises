const promiseSetTimeout = (timeout) => 
    new Promise((resolve, reject) => { 
      setTimeout(() => { 
        resolve() 
      }, timeout) 
    }) 
   
const function761_1 = async () => { 
    await promiseSetTimeout(10000) 
    console.log("★", new Date()) 
}  

const function761_2 = async () => { 
    await promiseSetTimeout(20000) 
    console.log("◆", new Date())
}  

console.log("start", new Date()) 
function761_1() 
function761_2()
console.log("end", new Date()) 