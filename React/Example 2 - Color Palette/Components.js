var options = [
  {
      description: 'red',
      code: '#FF605F'
  },
  {
      description: 'blue',
      code: '#58B3FF'
  },
  {
      description: 'green',
      code: '#49DD8E'
  },
  {
      description: 'orange',
      code: '#FF6663'
  }
];

var dropDownOnChange = function(change) {
    //alert(change.newValue);
};

var Container = React.createClass({
  render: function() {
    return(
        <Dropdown id='myDropdown' 
                  options={options} 
                  value='#FF6663'
                  labelField='description'
                  valueField='code'
                  onChange={dropDownOnChange}/>
    );
  }
});

var Dropdown = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired,
        value: React.PropTypes.oneOfType(
            [
                React.PropTypes.number,
                React.PropTypes.string
            ]
        ),
        valueField: React.PropTypes.string,
        labelField: React.PropTypes.string,
        onChange: React.PropTypes.func
    },

    getDefaultProps: function() {
        return {
            value: null,
            valueField: 'value',
            labelField: 'label',
            onChange: null
        };
    },

    getInitialState: function() {
        var selected = this.getSelectedFromProps(this.props);
        return {
            selected: selected
        }
    },
    
    componentWillReceiveProps: function(nextProps) {
        var selected = this.getSelectedFromProps(nextProps);
        this.setState({
           selected: selected
        });
    },
    
    getSelectedFromProps(props) {
        var selected;
        if (props.value === null && props.options.length !== 0) {
            selected = props.options[0][props.valueField];
        } else {
            selected = props.value;
        }
        return selected;
    },

    render: function() {
        var self = this;
        var options = self.props.options.map(function(option) {
            return (
                <option key={option[self.props.valueField]} value={option[self.props.valueField]}>
                    {option[self.props.labelField]}
                </option>
            )
        });
        return (
          <div>
            <Card color = {this.state.selected}/>
            <select id={this.props.id} 
                    className='form-control' 
                    value={this.state.selected} 
                    onChange={this.handleChange}>
                {options}
            </select>
          </div>
        )
    },

    handleChange: function(e) {
        if (this.props.onChange) {
            var change = {
              oldValue: this.state.selected,
              newValue: e.target.value
            }
            this.props.onChange(change);
        }
        this.setState({selected: e.target.value});
    }

});


var Square = React.createClass({
  render: function() {
    var squareStyle = {
      height: 150,
      backgroundColor: this.props.color
    };
    return(
      <div style={squareStyle}>
        
      </div>
    );
  }
});
 
var Label = React.createClass({
  render: function() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };
    return (
      <p style={labelStyle}>{this.props.color}</p>
    );
  }
});
 
var Card = React.createClass({
  render: function() {
        var cardStyle = {
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
      };
      return (
        <div style={cardStyle}>
            <Square {...this.props}/>
            <Label {...this.props}/>
        </div>
      );
    }
});

ReactDOM.render(
  <div>
     <Container/>
  </div>,
  document.querySelector("#container")
);