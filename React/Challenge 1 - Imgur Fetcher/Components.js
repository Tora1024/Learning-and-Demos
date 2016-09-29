var destination = document.querySelector("#container");

var Stuff = React.createClass({
    render: function() {
        return (
        <div>
          <h1>IMGUR FETCHER</h1>

          <div className="stuff">
            <ImgContainer/>
          </div>
        </div>
        );
    }
});

var ImgContainer = React.createClass({
    getInitialState: function() {
        return { data: null };
    },
    componentDidMount: function() {
        var that = this;

        $.ajax({
            type: "GET",
            url: "https://api.imgur.com/3/gallery/random/random/1",
            dataType: "text",
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Client-ID 190fadfd251efe5');
            },
            success: function(data) {
                var json = $.parseJSON(data);
                var links = json.data.map(function(item) {
                    return [item.link, item.description, item.title];
                })

                that.setState({data: links});
            }
        });
    },

    render: function() {
        if (this.state.data) {
            var index = 0;
            var imgContainerClass = "";
            var renderData = [];
            for (var value of this.state.data) {
                imgContainerClass = "img-container img-container" + index;
                renderData.push(
                    <div key={'img-container' + index} className={imgContainerClass}>
                        <ImgurImg linkData={value}/>
                        <ImgurText linkData={value}/>
                    </div>);
                index += 1;
            }
            return <div>{renderData}</div>;
        }
        return <div><img className="spinner" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/></div>;
    }
});

var ImgurImg = React.createClass({
    render: function() {
        return (
            <div>
              <img src={this.props.linkData[0]}/>
            </div>
        );
    }
});

var ImgurText = React.createClass({
    render: function() {
        var description = '';
        if (!this.props.linkData[1]) {
            description = "No description";
        } else {
            description = this.props.linkData[1];
        }
        return (
            <div className="img-text">
                <h3>{this.props.linkData[2]}</h3>
                <p>{description}</p>
                <code>{this.props.linkData[0]}</code>
            </div>
        );
    }
});

ReactDOM.render(
  <div>
    <Stuff/>
  </div>,
  destination
);