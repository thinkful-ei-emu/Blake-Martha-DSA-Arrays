import Memory from './memory';

class Array {
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
      this._resize((this.length + 1)* Array.SIZE_RATIO);
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
}

Array.SIZE_RATIO = 3;