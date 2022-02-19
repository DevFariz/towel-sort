
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let sortedArr = [];

  if(matrix === undefined || matrix.length == 0){
    return [];
  }

  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 0){
      for(let j of matrix[i]){
        sortedArr.push(j);
      }
    }else{
      for(let j of matrix[i].reverse()){
        sortedArr.push(j);
      }
    }
  }

  return sortedArr;
}
