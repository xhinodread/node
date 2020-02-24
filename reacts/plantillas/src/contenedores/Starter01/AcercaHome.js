import React from 'react';

import animales_left00 from "../../assets/animales_left00.png";

const AcercaHome =()=>{

	return(
		<>		
			<h2>CLINICA VETERINARIA - PATITA DE PERRO</h2>
			<h5>Bienvenidos</h5>
			<div className="fakeimg">
					<img src={animales_left00} style={{width:"300px"}} alt="Patita de Perro" className="img-fluid d-inline-block align-middle mr-2" />
			</div>
			<p>Some text..</p>
			<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
		</>	
	)
}
export default AcercaHome;
