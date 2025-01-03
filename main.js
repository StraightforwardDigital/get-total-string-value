var summation = function (num) {
  //define the tabulation variable
  let sum = 0;
  //for loop counts from 1 to num
  for (let i = 1; i <= num; i++){
    //tabulates the sum as it iterates through the number
    sum += i
  }
  return sum
}