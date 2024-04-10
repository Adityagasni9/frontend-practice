nums = [1, 3, -1, -3, 5, 3, 6, 7];

const result = [];
for (let i = 0; i < nums.length - k + 1; i++) {
    result.push(Math.max(...nums.slice(i, i + k)));
}

console.log(result);