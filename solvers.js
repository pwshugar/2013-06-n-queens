// Write code here that will find the solution count for a board of any size.
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)

var rookSolutions = [];

var permuter = function(array, sol) {
  if(array.length===0) {
    console.log("Solutions: " , sol);
    rookSolutions.push(sol.slice(0));
    return;
  }

  for(var i=0; i<array.length; i++) {
    var x = array.splice(i, 1)[0];
    sol.push(x);
    var y = permuter(array, sol);
    sol.pop();
    array.splice(i, 0, x);
  }
};

var makeIntegerArray = function(n) {
  var arr = [];

  for(var i=0; i<n; i++) {
    arr.push(i+1);
  }

  return arr;
};

var makePermArray = function(n) {
  var possiblePositions = makeBoard(n);

  for(var i=0; i<n; i++) {
    possiblePositions[i][i] = 1;
  }

  return possiblePositions;
};

window.findNRooksSolution2 = function(n){
  var solution = makeBoard(n);

  rookSolutions = [];

  permuter(makeIntegerArray(n),[]);

  return rookSolutions.length;
};

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

  for(var i = 0; i < n; i++){
    testBoard.togglePiece(0, i);
    for (var j = 0; j < n; j++) {
      if(passesConflicts(j)){}
    }
  }



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
