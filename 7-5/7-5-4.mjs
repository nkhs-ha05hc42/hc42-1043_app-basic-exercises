const func1 = () => 
    new Promise((resolve) => { 
      resolve("Test1") 
    })
const func2 = (Str) => 
    new Promise((resolve) => { 
        resolve("New" + Str) 
    })  
   
const function754 = () => { 
    func1()
      .then((Str) => func2(Str))
      .then((result) => {
        console.log(result)  
    }) 
} 
   
function754() 