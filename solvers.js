// Write code here that will find the solution count for a board of any size.
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)

window.findNRooksSolution = function(n){
  var solution = makeBoard(n);

  for (var i = 0; i < n; i++) {
    solution[i][i] = 1;
  }

  return solution;
};

window.countNRooksSolutions = function(n){
  var solutionCount = 1;

  for (var i = solutionCount; i <= n; i++) {
    solutionCount = solutionCount * i;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

window.makeBoard = function(n) {
  var board = [];

  for (var i = 0; i < n; i++) {
    board.push([0]);
    for (var j = 1; j < n; j++) {
      board[i].push(0);
    }
  }

  return board;
};

window.findNQueensSolution = function(n, findAllSolutions) {
  var solution = makeBoard(n);
  var testBoard = new Board(solution);

  debugger;

  findAllSolutions = findAllSolutions || false;





  console.log('Single solution for ' + n + ' queens:', solution);
  return solution;
};

window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


// This function uses a board visualizer lets you view an interactive version of any piece matrix.

window.displayBoard = function(matrix){
  $('body').html(
    new BoardView({
      model: new Board(matrix)
    }).render()
  );
};
