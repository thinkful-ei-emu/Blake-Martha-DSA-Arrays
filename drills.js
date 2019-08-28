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

console.log(URLify('www.thinkful.com /tauh ida parv een'));
console.log(filterLessThan5([1,3,5,6,7,8]));
console.log(maxSum([4, 6, -3, 5, -2, 1]));
//console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));