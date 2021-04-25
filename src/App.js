import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

function App() {
	const [image, setImage] = useState('');

	const handleChange = () => {
		axios
			.get(API_KEY)
			.then(response => {
				const uri = response.data.faces[0].urls[4][512];
				uri && setImage(uri);
			})
			.catch(err => {
				console.log(err.message);
			});
	};

	return (
		<div className='App'>
			<h1>Find a New AI Friend</h1>
			{image && <img src={image} alt='AI Friend' />}
			<button type='button' onClick={handleChange}>
				New Friend
			</button>
		</div>
	);
}

export default App;
