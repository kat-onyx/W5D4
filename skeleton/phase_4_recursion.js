function range(start, end){
  if (start === end){
    return end;
  }
  else if (start > end){
    return [];
  }

  let result = [];
  debugger;
  return result.push(range((start+1), end));
}