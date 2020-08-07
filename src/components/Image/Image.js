import React from 'react';
import './Image.css';

const Image = ({onInchange,onsubmit}) => {
	return(
		
		<div>
		<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
		<p className="animate__animated animate__backInDown" className='f3'>
		 'Give it a try!'
		</p>
		<div className='center'>
		<div className='form center pa3 br3 shadow-5'>
         <input className='f3 w-70' type='text' onChange={onInchange}/>
         <button onClick={onsubmit} className='grow w-20 ml0 f6 link pv1 ph2 ml2 bg-light-purple white pointer'>Detect</button>
         </div>
         </div>
		</div>
		);
}
export default Image;