var Circle = React.createClass({
  render: function() {
      var circleStyle = {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: this.props.bgColor,
        borderRadius: "50%",
        width: 100,
        height: 100,
      };

      return (
        <div style={circleStyle}>
        </div>
      );
    }
});

function showCircle() {
  var coloris = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
              "#85FFC7", "#297373", "#FF8552", "#A40E4C"];
 
  var renderData = [];
   
  for (var i = 0; i < coloris.length; i++) {
    renderData.push(<Circle key={i + coloris[i]} bgColor={coloris[i]}/>);
  }
  return renderData;
};

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    {showCircle()}
  </div>,
  destination
);