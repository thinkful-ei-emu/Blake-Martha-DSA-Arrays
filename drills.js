function URLify(str){
  let myArr = str.split('');
  myArr.forEach((char, index) => {
    if(char === ' '){
      myArr[index] = '%20';
    }
  });
  return myArr.join('');
}

function filterLessThan5(myArr){
  let myNewArr = [];
  myArr.forEach(num => {
    if (num >= 5){
      myNewArr.push(num);
    }
  });
  return myNewArr;
}

function maxSum(myArr){
  let solutions = [];
  myArr.forEach((num, index) =>{
    let sum = num;
    for(let i = index + 1; i < myArr.length; i++){
      sum += myArr[i];
      solutions.push(sum);
    }
  });
  solutions.sort((a,b) => a-b);
  return solutions[solutions.length -1];
}

function mergeArrays(myArr1, myArr2){
  let newArr = [];
  myArr1.forEach(element => newArr.push(element));
  myArr2.forEach(element => newArr.push(element));
  return newArr.sort((a,b)=> a-b);
}

function removeChars(str, chars){
  let charsArr = [];
  let strArr=[];
  let solution=[];
  let solutionStr = '';
  for(let i= 0; i< chars.length; i++){
    charsArr.push(chars.charAt(i));
  }
  for(let i = 0; i< str.length; i++){
    strArr.push(str.charAt(i));
  }
  strArr.forEach(character => {
    if(!(charsArr.includes(character))){
      solution.push(character);
    }
  });
  solution.forEach(character => {
    solutionStr += character;
  });
  return solutionStr;
}

function products(arr){
  let total=1; 
  let solutions = [];
  arr.forEach(number => {
    total *= number;
  });
  arr.forEach(number => {
    let newNum = total/number;
    solutions.push(newNum);
  });

  // let solutions = [];
  // arr.forEach((number, index) =>{
  //   let products = 1;
  //   for(let i = 0; i< arr.length; i++){
  //     products = number * products;
  //     console.log(products);
  //   }
  //   products = products/number;
  //   solutions.push(products);
  // });
  return solutions;
}

// console.log(URLify('www.thinkful.com /tauh ida parv een'));
// console.log(filterLessThan5([1,3,5,6,7,8]));
// console.log(maxSum([4, 6, -3, 5, -2, 1]));
// console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
// console.log(products([1, 3, 9, 4]));