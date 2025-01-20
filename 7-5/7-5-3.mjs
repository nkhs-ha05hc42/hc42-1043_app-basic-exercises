const function752SetTimeout = (timeout) => 
    new Promise((resolve, reject) => { 
      setTimeout(() => {  
        resolve() 
      }, timeout) 
    }) 
   
const function752 = () => { 
    function752SetTimeout(2000) 
      .then(() => { 
        console.log("★", new Date()) 
         function752SetTimeout(3000).then(() => {
            console.log("◆", new Date()) 
         })
         function752SetTimeout(5000).then(() => {
            console.log("end", new Date())
         })
      })
}
   
console.log("start", new Date()) 
function752() 