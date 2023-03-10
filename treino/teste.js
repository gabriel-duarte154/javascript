function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum){
    return [];
    } else {
      let count = rangeOfNumbers(startNum + 1 , endNum) 
      count.unshift(startNum)
      console.log(count)
      return count
    }
  };
  rangeOfNumbers(5, 10)