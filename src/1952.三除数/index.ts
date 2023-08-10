function isThree(n: number): boolean {  
    let dividerArr: number[] = [];  
  
    for (let i = 1; i <= n; i++) {  
        if (dividerArr.includes(i)) {  
            continue  
        }  
        if (n % i === 0) {  
            dividerArr.push(i)  
            if (n / Math.floor(i) !== i) {
                dividerArr.push(n / Math.floor(i))
            }
        }  
    }  
    return dividerArr.length === 3 ? true : false  
}

console.log(isThree(2));
console.log(isThree(4));
console.log(isThree(10));