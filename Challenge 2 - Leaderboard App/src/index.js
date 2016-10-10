import React, { Component } from 'react';
import ReactDom from 'react-dom';

import ProfileList from './components/profile_list';
import Loading from './components/loading';
import Header from './components/header';
import Footer from './components/footer';

import Axios from 'axios';

const API_URL = 'https://apis.trainheroic.com/public/leaderboard/468425';

class App extends Component {
	constructor() {
	    super();

	    this.state = {
	      	data: null
	    };

	    this.fetchProfiles(API_URL);
	}

	fetchProfiles(url) {
		Axios.get(url)
		.then((response) => {
			this.setState({data : response.data});
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		if(!this.state.data) {
			return (
				<div>
					<Loading />
				</div>
			);
		}

		return (
			<div className="parent-container">
				<Header />
				<ProfileList profiles={this.state.data.results} />
				<Footer footerlines={this.state.data} />
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.querySelector('.container')
);