import React from 'react';
import Slider from 'nuka-carousel';

const Header = ({headlines}) => {
	return (
		<div className="header">
			<h1>Leaderboard Summary</h1>
			
			<Slider className="header-slider" vertical={true} autoplay={true} autoplayInterval={3500} wrapAround={true} >
				<p>Workout Date: {headlines.date}</p>
				<p>Workout Mode: {headlines.workoutTitle}</p>
				<p>Instructions: {headlines.tests[0].testInstructions}</p>
				<p>Number of Players: {headlines.testStats[0].cnt}</p>
				<p>Average Results: {headlines.testStats[0].avg}</p>
			</Slider>
		</div>
	);
}

export default Header;