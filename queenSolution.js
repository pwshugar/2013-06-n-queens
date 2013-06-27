var makeBoard = function(n) {
  var board = [];

  for (var i = 0; i < n; i++) {
    board.push([1]);
    for (var j = 1; j < n; j++) {
      board[i].push(0);
    }
  }

  return board;
};

Object.prototype.clone = function() {
  var newObj = (this instanceof Array) ? [] : {};
  for (i in this) {
    if (i == 'clone') continue;
    if (this[i] && typeof this[i] == "object") {
      newObj[i] = this[i].clone();
    } else newObj[i] = this[i]
  } return newObj;
};

var end = function(board){
	var sum = 0;
	var n = board.length;
	for (var i = 0; i < n; i++){
		sum = sum + board[i][n - 1];
	}
	if (sum === n){
		return true;
	} else {
		return false;
	}
};

var checkBoard = function(board){
	var test = new Board(board);

	return test.hasAnyRooksConflicts();
};

var changeBoard = function(board, rowNum){
	var n = board.length;
	var index;
	for (var i = 0; i < n; i++){
		if (board[rowNum][i]){
			index = i;
		}
	}
	if (index < n - 1) {
		board[rowNum][index] = 0;
		board[rowNum][index + 1] = 1;
	} else {
		board[rowNum][n - 1] = 0;
		board[rowNum][0] = 1;
		changeBoard(board, rowNum - 1);
	}
};

var result = [];

var recurse = function(board){
	debugger;
	console.log("called queenSOl");
	var n = board.length;
	var oldBoard = board.clone();
	if (!checkBoard(board)){
		result.push(oldBoard);
		// console.log(oldBoard[0]);
		// console.log(oldBoard[1]);
		// console.log(oldBoard[2]);
		// console.log(oldBoard[3]);
		// console.log('');
	}
	if (end(board)) {
		console.log(result.length , " many solutions found");
		return;
	} else {
		changeBoard(board, n - 1);
		recurse(board);
	}
};


