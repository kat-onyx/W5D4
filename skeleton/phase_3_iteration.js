Array.prototype.bubbleSort = function() {
  let isSorted = false;
  
  while (!isSorted) {
    isSorted = true;
    
    for(let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        isSorted = false;
      }
    }
  }
  return this;
};
//helper
Array.prototype.uniq = function() {
  let result = [];
  for(let i = 0; i < this.length; i++){
    if (!result.includes(this[i])){
      result.push(this[i]);
    }
  }
  return result;
};

String.prototype.substrings = function() {
  let result = [];
  
  for(let i =0; i < this.length; i++) {
    for(let j = i+1; j < this.length + 1; j++) {
      result.push(this.slice(i, j));
    }
  }
  
  return result.uniq();
};