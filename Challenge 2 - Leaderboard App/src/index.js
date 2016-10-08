import React, { Component } from 'react';
import ReactDom from 'react-dom';

import ProfileList from './components/profile_list';
import Loading from './components/loading';

import Axios from 'axios';

const API_URL = 'https://apis.trainheroic.com/public/leaderboard/468425';

class App extends Component {
	constructor() {
	    super();

	    this.state = {
	      	profiles: null
	    };

	    this.fetchProfiles(API_URL);
	}

	fetchProfiles(url) {
		Axios.get(url)
		.then((response) => {
			this.setState({profiles : response.data.results});
			console.log(response);
		})
		.catch(function (error) {
			this.setState('error');
			console.log(error);
		});
	}

	render() {
		if(!this.state.profiles) {
			return (
				<div>
					<Loading />
				</div>
			);
		}

		return (
			<div>
				<ProfileList profiles={this.state.profiles}/>
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.querySelector('.container')
);