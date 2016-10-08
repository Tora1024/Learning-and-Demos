import React from 'react';

const Item = ({image}) => {
	//const imageURL = video.snippet.thumbnails.default.url;

	console.log('cargando item ' + image);
	return (
		<li>
			<img className="profile-image" src={image} />
		</li>
	);
};

export default Item;