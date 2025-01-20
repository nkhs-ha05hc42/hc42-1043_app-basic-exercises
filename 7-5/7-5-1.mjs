const function751SetTimeout = (timeout) => 
    new Promise((resolve, reject) => { 
      setTimeout(() => {  
        resolve() 
      }, timeout) 
    }) 
   
const function751 = () => { 
    function751SetTimeout(10000) 
      .then(() => { 
        console.log("★", new Date()) 
      }) 
    function751SetTimeout(20000) 
      .then(() => { 
        console.log("◆", new Date()) 
    })
} 
   
console.log("start", new Date()) 
function751() 
console.log("end", new Date()) 