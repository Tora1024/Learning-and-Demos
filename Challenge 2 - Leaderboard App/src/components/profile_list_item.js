import React from 'react';

const Item = ({image}) => {
	return (
		<li>
			<img className="profile-image" src={image} />
		</li>
	);
};

export default Item;