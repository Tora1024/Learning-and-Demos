import React from 'react';
import ProfileListItem from './profile_list_item'

const ProfileList = ({profiles}) => {
	const profileItems = profiles.map((profile) => {
		return (
			<ProfileListItem
				key={profile.userId} 
				image={profile.profileImg}
			/>
		);
	});

	console.log('cargando lista ' + profiles[0].profileImg);

	return (
		<ul className="col-md-4 list-group">
			{profileItems}
		</ul>
	);
}

export default ProfileList;