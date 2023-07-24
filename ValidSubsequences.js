function isValidSubsequence(array, sequence) {

 let index = 0;
  for (let i = 0; i < array.length; i++) {
    if(index === sequence.length) {
      break;
    }
    if(array[i] === sequence[index] && index < sequence.length) {
      index++;
    }
  }
  return index === sequence.length;
  
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;