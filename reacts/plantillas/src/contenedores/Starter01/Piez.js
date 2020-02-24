import React from 'react';

const Piez=()=>{

	return(
		<div className="jumbotron text-center" style={{marginBottom:"0"}} >
			<p>Pies del sitio Web</p>
			<p>
					<a href="#" className="fa fa-facebook"></a>
			</p>
			<p>{(new Date()).getFullYear().toString()}</p>
		</div>	)
}
export default Piez; 
