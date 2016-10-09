import React from 'react';
import ProfileListItem from './profile_list_item'

const ProfileList = ({profiles}) => {
	const profileItems = profiles.map((profile) => {
		return (
			<ProfileListItem
				key={profile.userId} 
				profile={profile}
			/>
		);
	});

	return (
		<ul className="list-group">
			{profileItems}
		</ul>
	);
}

export default ProfileList;