const Memory = require('./memory.js');

class MyArray {
  constructor(){
    //set length to 0 and ptr to 0 blocks
    this.length=0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);
  }

  //push: reserve space for new item, then set value

  // arr = []
  // arr = [x]
  // arr = [_, _]

  push(value){
    if(this.length >= this._capacity){
      this._resize((this.length + 1)* MyArray.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  //allocate new larger space of memory, then copy existing 
  //values and set old values to free
  _resize(size){
    const oldPtr = this.ptr; 
    this.ptr = Memory.allocate(size);
    if(this.ptr === null){
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index);
  }
  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}
MyArray.SIZE_RATIO = 3;



module.exports =  MyArray;