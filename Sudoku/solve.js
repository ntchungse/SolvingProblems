
let board = [[ 3, 1, 6, 0, 7, 8, 0, 9, 2 ], 
              [ 5, 2, 9, 1, 3, 4, 7, 6, 8 ], 
              [ 4, 8, 7, 6, 2, 9, 5, 0, 1 ], 
              [ 2, 6, 3, 0, 1, 5, 9, 8, 7 ], 
              [ 9, 7, 4, 8, 6, 0, 1, 2, 5 ], 
              [ 0, 5, 1, 7, 9, 2, 6, 4, 3 ], 
              [ 1, 3, 8, 0, 4, 7, 2, 0, 6 ], 
              [ 6, 9, 2, 3, 5, 1, 8, 7, 4 ], 
              [ 7, 4, 5, 0, 8, 6, 3, 1, 0 ]];
var isPossible = function(board, row, column, num){
  //Check Row
  for(let i = 0; i < 9; i++){
    if(board[row][i] == num){
      return false;
    }
  }
  //Check Column
  for(let i = 0; i < 9; i++){
    if(board[i][column] == num){
      return false;
    }
  }
  //Check SubBoard
  subRow = row < 3 ? 0 : (row < 6) ? 3 : 6;
  subColumn = column < 3 ? 0 : (column < 6) ? 3 : 6;
  for(let i = subRow; i < subRow + 3; i++){
    for(let j = subColumn; j < subColumn + 3; j++){
      if(board[i][j] == num){
        return false;
      }
    }
  }
  return true;
}

var solve = function(board){
  let isEmpty = true;
  let row = 0, column = 0;
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(board[i][j] == 0){
        row = i;
        column = j;
        isEmpty = false;
        break;
      }
    }
    if(!isEmpty){
      break;
    }
  }
  if(isEmpty){
    return true;
  }
  for(let num = 1; num <= 9; num++){
    if(isPossible(board,row,column,num)){
      board[row][column] = num;
      if(solve(board)){
        return true;
      }
      else{
        board[row][column] = 0;
      }
    }
  }
  return false;
}

solve(board);

console.log(board)