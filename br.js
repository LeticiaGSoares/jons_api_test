let x = [3,8,4,2,1,6,8,7,11,9]
let y = [2,1,5,12,3,0,1,4,5,6]
let uniao = []

for (let i = 0; i < x.length; i++) {
    if (uniao.indexOf(x[i]) === -1) {
        uniao.push(x[i]);
    }
}

for (let i = 0; i < y.length; i++) {
    if (uniao.indexOf(y[i]) === -1) {
        uniao.push(y[i]);
    }
}

console.log(uniao)