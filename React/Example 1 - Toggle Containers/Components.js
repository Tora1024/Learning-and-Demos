var Board = React.createClass({
  render: function() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
});

var BoardSwitcher = React.createClass({
  getInitialState: function() {
    return {
      selectedBoard: 0
    }
  },

  onToggleClick: function(evt) {
    
    if (this.state.selectedBoard + 1 < this.props.numBoards) {
      this.setState({
        selectedBoard: (this.state.selectedBoard + 1)
      })
    } else {
      this.setState({
        selectedBoard: 0
      })
    }
  },

  render: function() {
    var boards = [];
    for (var ii = 0; ii < this.props.numBoards; ii++) {
      // We can compare to state here so we're no longer always selecting the first board.
      var isSelected = ii === this.state.selectedBoard;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleClick}>Toggle</button>
      </div>
    );
  }
});

ReactDOM.render(
  <BoardSwitcher numBoards={5} />,
  document.getElementById('container')
);