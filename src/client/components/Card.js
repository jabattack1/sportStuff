import React from 'react';
import {Link} from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';



class Card extends React.Component{
	render(){
		const {post, i, comments} = this.props;

		return(
			<figure className='grid-figure'>
				<div className='grid-figure-wrap'>
					<h1 className='rank'>{post.rank}</h1>
					<Link to={'/view/'+ post.code }>
						<img src={post.display_src} alt={post.caption} className='grid-card' onMouseOver={this.props.change.bind(null, i)} onMouseOut={this.props.changeBack.bind(null, i)}/>
					</Link>

					<CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
						<span key={post.likes} className='likes-heart'>{post.likes}</span>
					</CSSTransitionGroup>
				</div>


				<figcaptions>
					<p className='caption'>{post.caption}</p>
					<p className='description'>{post.description}</p>
					<div className='control-buttons'>
						<button onClick={this.props.increment.bind(null, i)} className='likes'>&hearts; {post.likes}</button>
					</div>
				</figcaptions>
			</figure>
		)
	}

}

export default Card;