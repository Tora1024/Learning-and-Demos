import React from 'react';
import ProfileListItem from './profile_list_item';
import Slider from 'nuka-carousel';

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
		<Slider className="profile-list list-group" 
			autoplay={true} 
			autoplayInterval={4000} 
			wrapAround={true} 
			dragging={false}
			slidesToShow={3}>
			{profileItems}
		</Slider>
	);
}

export default ProfileList;