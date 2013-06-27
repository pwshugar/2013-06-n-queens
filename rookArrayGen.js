var rookSolutions = [];

var permuter = function(array, sol) {
  if(array.length===0) {
    console.log("Solutions: " , sol);
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