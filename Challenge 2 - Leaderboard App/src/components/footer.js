import React from 'react';
import Slider from 'nuka-carousel';

const Footer = ({footerlines}) => {
	let avg = parseFloat(Number(footerlines.testStats[0].avg).toFixed(2));
	
	return (
		<div className="footer">
			
			<Slider className="footer-slider" vertical={true} autoplay={true} autoplayInterval={3500} wrapAround={true} >
				<p>Workout Date: {footerlines.date}</p>
				<p>Workout Mode: {footerlines.workoutTitle}</p>
				<p>Instructions: {footerlines.tests[0].testInstructions}</p>
				<p>Number of Players: {footerlines.testStats[0].cnt}</p>
				<p>Average Results: {avg}</p>
			</Slider>
		</div>
	);
}

export default Footer;