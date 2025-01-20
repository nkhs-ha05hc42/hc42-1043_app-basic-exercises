const function744 = (a, b) => {
    return a + b
}
   
console.log("start", new Date()) 
setTimeout(() => {
    const result = function744(2, 3)
    console.log(result, new Date()) 
    console.log("end", new Date()) 
}, 2000) 