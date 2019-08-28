const MyArray = require('./array.js');

function main(){

  MyArray.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new MyArray();

  // Add an item to the array
  arr.push('bear');
  console.log(arr.get(0));
    
    

  console.log(arr);
}

main();