import React from 'react'
import './Face.css';

const Face = ({imageurl,box}) => {
	return(
		<div className='center ma'>
      <div className='absolute mt2'>
        <img id='im' alt='' src={imageurl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}
export default Face;