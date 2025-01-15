/*
Promise.any(): Use it when you need the first successful promise, and you want to ignore the rejections
               (but handle them later if needed).

Promise.race(): Use it when you are dealing with multiple promises where you want the first to settle, 
                regardless of whether it is fulfilled or rejected
                (e.g., you may want to trigger something based on the first response, even if it fails).
*/
