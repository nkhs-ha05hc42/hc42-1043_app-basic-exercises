const func1 = () => 
    new Promise((resolve) => { 
        resolve("Test1") 
    })
const func2 = (Str) => 
    new Promise((resolve) => { 
        resolve("Test2") 
    })  

const func3 = async () => { 
    const [result1, result2] = await Promise.all([func1(), func2()]) 
    console.log(result1, result2) 
} 

func3() 