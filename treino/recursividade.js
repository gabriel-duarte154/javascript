function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return  0 // 0 + arr[3] + arr[2] + arr[1] + arr[0]
    } else {
      return  arr[n - 1] + sum(arr, n - 1) // arr[3] + arr[2] + arr[1] + arr[0]
    }
    // Only change code above this line
  }
  
  console.log(sum([1], 1))