import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC5NnG_FD3TzJibgtsr3buQzhWt43Xy8TA';

const App = () => {
	return ( 
		<div>
			<SearchBar />
		</div>
	);
}

ReactDom.render(
	<App />,
	document.querySelector('.container')
);