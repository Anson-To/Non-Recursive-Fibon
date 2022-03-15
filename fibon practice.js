function recursion(n) {
    if (n < 0) {
        return 0;
    } else if (n == 0 || n == 1) {
        return n;
    } else if (n > 1) {
        return recursion(n - 1) + recursion(n - 2);
    }
}

function fibon(n) {
    //construct simple case like n=2,3,...10 return 1,2,...55 respectively
    let result = 0;
    let a = n;
    while (n > 1) {
        result = result + n + n--;
    }
    return result;
}
//Working
function fibon2(n) {
    //construct simple case like n=2,3,...10 return 1,2,...55 respectively
    let result = 0;
    let i0 = 0;
    let i1 = 1;
    let increment = 0;
    if (n <= 1) {
        return n;
    } else if (n > 1) {
        for (let i = 1; i < n; i++) {
            result = BigInt(i0) + BigInt(i1);
            i0 = BigInt(i1);
            i1 = BigInt(result);
        }
        return result;
    }
}
//Try to do Arrow function based on fibon2
const fibon3 = (n) => {
    let result = 0;
    let i0 = 0;
    let i1 = 1;
    let increment = 0;
    if (n <= 1) {
        return n;
    } else if (n > 1) {
        for (let i = 1; i < n; i++) {
            result = BigInt(i0) + BigInt(i1);
            i0 = BigInt(i1);
            i1 = BigInt(result);
        }
        return result;
    }
};

console.log(fibon2(1));
console.log(fibon2(8181));
console.log(fibon3(8181));
