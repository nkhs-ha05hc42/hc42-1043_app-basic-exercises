const function753SetTimeout = (timeout) => 
    new Promise((resolve, reject) => { 
      setTimeout(() => {  
        resolve() 
      }, timeout) 
    }) 
   
const function753 = () => { 
    function753SetTimeout(2000) 
      .then(() => { 
        console.log("★", new Date()) 
        return function753SetTimeout(3000) 
      }) 
      .then(() => { 
        console.log("◆", new Date()) 
        return function753SetTimeout(5000)
      }) 
      .then(() => {
        console.log("end", new Date()) 
      })

}
   
console.log("start", new Date()) 
function753() 