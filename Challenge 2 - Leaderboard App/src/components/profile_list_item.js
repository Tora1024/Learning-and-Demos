import React from 'react';

const Item = ({profile}) => {
	const tests = profile.tests.map((test) => {
		return (
			<label key={test}>{test}</label>
		);
	});

	return (
		<div className="list-group-item profile-list-item">
			<p className="profile-list-item_rank" >{profile.rank}</p>
			<div className="profile-image">
				<img className="portrait" src={profile.profileImg} />
			</div>
			<p>{profile.userFirstName} {profile.userLastName}</p>
			<p>Tests: {tests}</p>
		</div>
	);
};

export default Item;