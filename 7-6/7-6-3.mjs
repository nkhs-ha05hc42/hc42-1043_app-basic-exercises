const promiseSetTimeout = (timeout) => 
    new Promise((resolve, reject) => { 
      setTimeout(() => { 
        resolve() 
      }, timeout) 
    }) 
   
const function761 = async () => { 
    await promiseSetTimeout(2000) 
    console.log("★", new Date()) 
    await promiseSetTimeout(3000) 
    console.log("◆", new Date())
    await promiseSetTimeout(2000) 
    console.log("end", new Date()) 
}  

console.log("start", new Date()) 
function761() 