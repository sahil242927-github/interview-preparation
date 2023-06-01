const multiplyBy2 = (num) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(num == 10 ) {
            reject('number 10 is not allowed')
        }
        resolve(num * 2)
    }, 4000)
        
    })    
}

multiplyBy2(2).then(res => multiplyBy2(res).then((res2) => console.log(res2)))
