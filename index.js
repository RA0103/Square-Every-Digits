/*
For example: if we run 9119 through the function 811181 will come out

Note: The function accepts an integer and returns an integer


*/

function squareDigits(num) {
  let strNum = String(num);
  let result = "";
  for (let i = 0; i < strNum.length; i++) {
    let squared = parseInt(strNum[i] + parseInt(strNum[i]));
    result = result + String(squared);
  }
  console.log(parseInt(result));
}
squareDigits(9119);
