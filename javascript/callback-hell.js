const multiplyBy2 = (num , cb) => {
    setTimeout(() => {
        cb(undefined, num*2)
    }, 4000)
}

const multiply = (num) => {
    multiplyBy2(num, (error, result) => {
        if(!error) {
            multiplyBy2(result, (error, result2) => {
                console.log(result2)
            })
        }
    })
}

multiply(3)
