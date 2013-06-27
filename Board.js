(function(){

  window.Board = Backbone.Model.extend({

    initialize: function(params){
      if (params.n) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function(){
      return _(_.range(this.get('n'))).map(function(rowIndex){
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex){
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex){
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex){
      return colIndex + rowIndex;
    },


    hasAnyRooksConflicts: function(){
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex){
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function(){
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex){
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


    // todo: fill in all these functions - they'll help you!

    moreThanOne: function(array) {
      var sum = _.reduce(array, function(memo, num){return memo + num;}, 0);
      return (sum>1) ? true : false;
    },

    hasRowConflictAt: function(rowIndex){
      return this.moreThanOne(this.get(rowIndex));
    },

    hasAnyRowConflicts: function(){
      var rows = this.rows();
      var that = this;

      return _.some(rows, function(row) {
        return that.moreThanOne(row);
      });
    },

    hasColConflictAt: function(colIndex){
      var rows = this.rows();
      var sum = 0;

      for(var i=0; i<rows.length; i++) {
        sum += rows[i][colIndex];
      }

      return (sum>1) ? true : false;
    },

    hasAnyColConflicts: function(){
      for(var i=0; i<this.rows().length; i++) {
        if(this.hasColConflictAt(i)) {
          return true;
        }
      }
      return false;
    },

    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow){
      var rows = this.rows();

      var sum = 0;
      var rowIndex = 0;

      for(var i=majorDiagonalColumnIndexAtFirstRow; i<rows.length; i++) {
        if((i>-1)&&(rowIndex<rows.length)) {
          sum += rows[rowIndex][i];
        }
        rowIndex++;
      }

      return (sum>1) ? true : false;
    },

    hasAnyMajorDiagonalConflicts: function(){
      var n = this.rows().length;
      var start = (n-2)*-1;

      for(var i=start; i<n-1; i++) {
        if(this.hasMajorDiagonalConflictAt(i)) {
          return true;
        }
      }
      return false;
    },

    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow){
      var rows = this.rows();

      var sum = 0;
      var rowIndex = 0;

      for(var i=minorDiagonalColumnIndexAtFirstRow; i>=0; i--) {
        if((i<rows.length)&&(rowIndex<rows.length)) {
          sum += rows[rowIndex][i];
        }
        rowIndex++;
      }

      return (sum>1) ? true : false;
    },

    hasAnyMinorDiagonalConflicts: function(){
      var n = this.rows().length;
      for(var i=1; i< n + (n-2); i++) {
        if(this.hasMinorDiagonalConflictAt(i)) {
          return true;
        }
      }
      return false;
    }

  });

  var makeEmptyMatrix = function(n){
    return _(_.range(n)).map(function(){
      return _(_.range(n)).map(function(){
        return 0;
      });
    });
  };

}());
