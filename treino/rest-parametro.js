const sum = (...num) => {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
      total += num[i];
    }
    return total;
  }
  console.log(sum(4, 5, 6, 7, 5, 7, 8, 8, 5))