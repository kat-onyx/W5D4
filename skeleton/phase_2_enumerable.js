//Array#myEach(callback)

Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

//Array#myMap(callback)

Array.prototype.myMap = function(callback) {
  let mapArr = [];
  for(let i = 0; i < this.length; i++) {
    mapArr.push(callback(this[i]));
  }
  return mapArr;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let i = 0;
  if (initialValue === undefined) {
    // debugger
    initialValue = this[0];
    i += 1;
  } 
  
  while (i < this.length) {
      initialValue = callback(initialValue, this[i]);
      i += 1;
  }
  return initialValue;
};