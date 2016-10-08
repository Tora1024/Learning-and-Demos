import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC5NnG_FD3TzJibgtsr3buQzhWt43Xy8TA';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Smash');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term}, (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
        //ES6 suggar, only works when the key and the value have the same name.
    });
  }

	render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    
    return ( 
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList 
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={ this.state.videos } />
      </div>
    );
  }
}

ReactDom.render(
	<App />,
	document.querySelector('.container')
);