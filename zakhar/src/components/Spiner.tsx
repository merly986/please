
import React from 'react';
import './../style/spiner.css'
const Spiner: React.FC = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'30vh'}}>
			<span className='loader'></span>
			<></>
		</div>
		
	)
}
export default Spiner;