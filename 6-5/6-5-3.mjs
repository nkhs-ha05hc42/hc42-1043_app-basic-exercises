let cnt = 0
let sum = 0

for(let i = 1; i <= 100; i++){
    if(i%2 == 0){
        cnt += 1
        sum += i
        if(cnt >= 50)
            break
    }
}

console.log(`ループ回数${cnt}`)
console.log(`合計数${sum}`)