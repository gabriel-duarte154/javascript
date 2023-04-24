let nums = [4, 5, 7, 8, 6];
let numsPlus1 = nums.map(num => ++num);
// console.log(numsPlus1);

let sumAll = nums.reduce((sum, num) => {
    console.log(`sum ${sum}`);
    console.log(`num ${num}`);
    return sum + num
});
console.log(sumAll);