import React from 'react';

import fotoHome00 from "../../assets/fotoHome00.jpeg"

const CuerpoBase=()=>{

	return(
		<>
			<h2>CLINICA VETERINARIA - PATITA DE PERRO</h2>
			<h5>Bienvenidos</h5>
			<div className="fakeimg">
					<img src={fotoHome00} style={{width:"300px"}} alt="Patita de Perro" className="img-fluid d-inline-block align-middle mr-2" />
			</div>
			<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
		</>	
		)
}
export default CuerpoBase;
