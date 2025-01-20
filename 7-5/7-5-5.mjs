const func1 = () => 
    new Promise((resolve) => { 
        resolve("Test1") 
    })
const func2 = (Str) => 
    new Promise((resolve) => { 
        resolve("Test2") 
    })  

const func3 = async () => { 
    Promise.all([func1(), func2()]).then(([result1, result2]) => 
     console.log(result1, result2) 
) 
} 

func3() 