import React from 'react';

const Item = ({profile}) => {
	const tests = profile.tests.map((test) => {
		return (
			<label key={test}>{test}</label>
		);
	});

	return (
		<li className="list-group-item">
			<p>{profile.rank}</p>
			<img className="profile-image" src={profile.profileImg} />

			<p>{profile.userFirstName} {profile.userLastName}</p>
			<p>Tests: {tests}</p>
		</li>
	);
};

export default Item;