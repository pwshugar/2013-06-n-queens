// Write code here that will find the solution count for a board of any size.
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)


window.findNRooksSolution = function(n){
  rookSolutions = [];

  permuter(_.range(n),[]);

  return rookSolutions[0];
};

// window.findNRooksSolution = function(n){
//   result = [];
//   var solutions = recurse(makeBoard(n));

//   return result[0];
// };


window.countNRooksSolutions = function(n){
  var solutionCount = 1;

  for (var i = solutionCount; i <= n; i++) {
    solutionCount = solutionCount * i;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

window.findNQueensSolution = function(n) {
  queenSolutions = [];
  makeQueenBoards(_.range(n),[]);

  console.log("Queen solution for " , n , queenSolutions[0]);
  
  return queenSolutions[0] || makeEmptyBoard(n);
};

window.countNQueensSolutions = function(n){
  queenSolutions = [];
  makeQueenBoards(_.range(n),[]);

  console.log('Number of solutions for ' + n + ' queens:' , queenSolutions.length);
  return queenSolutions.length || 0;
};


// This function uses a board visualizer lets you view an interactive version of any piece matrix.

window.displayBoard = function(matrix){
  $('body').html(
    new BoardView({
      model: new Board(matrix)
    }).render()
  );
};
