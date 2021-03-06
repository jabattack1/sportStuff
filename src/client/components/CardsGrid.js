import React from 'react';
import {Link} from 'react-router-dom';
import Card from './Card.js';

var createReactClass = require('create-react-class');



const CardsGrid = createReactClass({
	render(){
		return(
			<div className='cards-grid'>
				{this.props.posts.map((post, i) => <Card {...this.props} key={i} i={i} post={post} />)}
			</div>
		)
	}
});

export default CardsGrid;