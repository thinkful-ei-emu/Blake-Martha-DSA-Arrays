function URLify(str) {
  let myArr = str.split('');
  myArr.forEach((char, index) => {
    if (char === ' ') {
      myArr[index] = '%20';
    }
  });
  return myArr.join('');
}

function urlify(str){
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === ' '){
      arr[i] = '%20';
    }
  }
  return arr.join('');
}

function filterLessThan5(myArr) {
  let myNewArr = [];
  myArr.forEach(num => {
    if (num >= 5) {
      myNewArr.push(num);
    }
  });
  return myNewArr;
}

function maxSum(myArr) {
  let solutions = [];
  myArr.forEach((num, index) => {
    let sum = num;
    for (let i = index + 1; i < myArr.length; i++) {
      sum += myArr[i];
      solutions.push(sum);
    }
  });
  solutions.sort((a, b) => a - b);
  return solutions[solutions.length - 1];
}

let maxSubArray = function (arr) {
  let maxEndingHere = 0;
  let maxSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    maxEndingHere = Math.max(0, maxEndingHere + item);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};

function mergeArrays(myArr1, myArr2) {
  let newArr = [];
  myArr1.forEach(element => newArr.push(element));
  myArr2.forEach(element => newArr.push(element));
  return newArr.sort((a, b) => a - b);
}

function removeChars(str, chars) {
  let charsArr = [];
  let strArr = [];
  let solution = [];
  let solutionStr = '';
  for (let i = 0; i < chars.length; i++) {
    charsArr.push(chars.charAt(i));
  }
  for (let i = 0; i < str.length; i++) {
    strArr.push(str.charAt(i));
  }
  strArr.forEach(character => {
    if (!(charsArr.includes(character))) {
      solution.push(character);
    }
  });
  solution.forEach(character => {
    solutionStr += character;
  });
  return solutionStr;
}

function products(arr) {
  let total = 1;
  let solutions = [];
  arr.forEach(number => {
    total *= number;
  });
  arr.forEach(number => {
    let newNum = total / number;
    solutions.push(newNum);
  });
  return solutions;
}

let myKewlArray = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

function twoDArray(arr) {
  let newArr = arr.map(x => [...x]);
  arr.forEach((row, rowIndex) => {
    row.forEach((item, index) => {
      if (item === 0) {
        for (let i = 0; i < row.length; i++) {
          newArr[rowIndex][i] = 0;
        }
        for (let i = 0; i < newArr.length; i++) {
          newArr[i][index] = 0;
        }
      }
    });
  });
  return newArr;
}

function stringRotation(str1, str2) {
  let str2Arr = str2.split('');
  for (let i = 0; i < str2.length; i++) {
    let what = str2Arr.pop();
    str2Arr.unshift(what);
    let str2copy = str2Arr.join('');
    if (str2copy === str1) {
      return true;
    }
  }
  return false;
}

function strRotation(string1, string2){
  return (string2 + string2).indexOf(string1) !== -1;
}


console.log(URLify('www.thinkful.com /tauh ida parv een'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));
console.log(filterLessThan5([1,3,5,6,7,8]));
console.log(maxSum([4, 6, -3, 5, -2, 1]));
console.log(maxSubArray([4, 6, -3, 5, -2, 1]));
console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
console.log(products([1, 3, 9, 4]));
console.log(twoDArray(myKewlArray));
console.log(stringRotation('amazon', 'azonam'));
console.log(stringRotation('amazon', 'azonma'));
console.log(strRotation('amazon', 'azonam'));
console.log(strRotation('amazon', 'azonma'));