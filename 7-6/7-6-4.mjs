const func1 = () => 
    new Promise((resolve) => { 
      resolve("Test1") 
    })
const func2 = (Str) => 
    new Promise((resolve) => { 
        resolve("New" + Str) 
    })  

const function764 = async () => { 
    const Str = await func1() 
    const result = await func2(Str) 
    console.log(result) 
} 
   
function764() 