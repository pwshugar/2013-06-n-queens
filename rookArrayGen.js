var rookSolutions = [];
var queenSolutions = [];

var permuter = function(array, sol) {
  if(array.length===0) {
    rookSolutions.push(sol.slice());
    return;
  }
  for(var i=0; i<array.length; i++) {
    xArray = array.slice();
    xSol = sol.slice();
    xSol.push(xArray.splice(i,1)[0]);
    permuter(xArray, xSol);
  }
};

var makeQueenBoards = function(array, sol) {
  if(diagonalConflict(sol)) {
    console.log("diag conflict");
    return;
  }
  if(array.length===0) {
    console.log("Found solution for queens!" , sol);
    queenSolutions.push(sol.slice());
    return;
  }
  for(var i=0; i<array.length; i++) {
    xArray = array.slice();
    xSol = sol.slice();
    xSol.push(xArray.splice(i,1)[0]);
    makeQueenBoards(xArray, xSol);
  }
};

var diagonalConflict = function(arr){
  var n = arr.length;
  for (var i = 0; i < n; i++){
    for (var j = i + 1; j < n; j++){
      if (Math.abs(arr[j] - arr[i]) === Math.abs(j - i)) {
        return true;
      }
    }
  }
  return false;
};

var makeEmptyBoard = function(n) {
  var board = [];

  for (var i = 0; i < n; i++) {
    board.push([0]);
    for (var j = 1; j < n; j++) {
      board[i].push(0);
    }
  }

  return board;
};

var makeBoardFromIndicies = function(array) {
  var board = makeEmptyBoard(array.length);

  for(var i=0; i<array.length; i++) {
    var col = array[i]-1;
    board[i][col] = 1;
  }

  return board;
};

// window.findNRooksSolution2 = function(n){
//   rookSolutions = [];

//   permuter(_.range(n),[]);

//   return rookSolutions[0];
// };