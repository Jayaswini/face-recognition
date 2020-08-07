import React from 'react';
const Navigation = ({onroute,is}) => {
		if(1){
			return(
		<nav style={{ display:"flex",justifyContent:"flex-end"}}>
		  <p onClick={()=>onroute('signin')} className ='f3 link underline dim pa3 pointer'> Sign Out </p>
		 </nav>
		 );
		}
		else{
			return(
			<div>
			<nav style={{ display:"flex",justifyContent:"flex-end"}}></nav>
			</div>
			);
		}
		
}
export default Navigation;