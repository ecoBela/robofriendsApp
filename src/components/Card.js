import React from 'react';
const Card = ({ name, email, id }) => {  // instead of { vars,...}  put props
// then here have: const { vars } = props;
	return (
		<div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;