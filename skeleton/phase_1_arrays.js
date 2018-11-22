//Array#uniq

Array.prototype.uniq = function() {
  let result = [];
  for(let i = 0; i < this.length; i++){
    if (!result.includes(this[i])){
      result.push(this[i]);
    }
  }
  return result;
};

//Array#twoSum

Array.prototype.twoSum = function() {
  let sums = [];
  for(let i=0; i < this.length; i++){
    for(let j=i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sums.push([i, j]);
      }
    }
  }
  return sums;
};

//Array#transpose

Array.prototype.transpose = function() {
//   columns = [];
// 
//   this.length.times do 
//     column << [];
//   end
// 
// // [[1,2,3], [4,5,6]]
// // [[1,4], [2,5], [3,6]]  
// 
//   for(let i=0; i<this.length; i++){
//     for(let j=0; j<this.length; j++){
//         columns[i][j] = this[j][i];
//     }
//   }
// 
//   return columns;

  const rows = this.length;
  const cols = this[0].length;
  const grid = [];

  for (let j = 0; j < cols; j++){
    grid[j] = Array(rows);
  }

  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++) {
      grid[j][i] = this[i][j];
    }
  }

  return grid;

};

// [[1,2,3], [4,5,6]]
// [[1,4], [2,5], [3,6]]  
//[[1,2,3],[4,5,6],[7,8,9]]

//[1,4,7]
//[2,5,8]
//[3,6,9]