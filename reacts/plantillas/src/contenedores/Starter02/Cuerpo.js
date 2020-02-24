import React from 'react';

import CarruselProductos from './CarruselProductos';
import "../../stylos/styloApp02.css";
import carita_perro from "../../assets/carita_perro.png";
import carita_perro_fondo00 from "../../assets/carita_perro_fondo00.png";
import ninios_pollito from "../../assets/ninios_pollito.png";
import vet02_510_528 from "../../assets/vet02_510_528.png";

const Cuerpo =()=>{

	return(
		<>
			<div className="row" style={{marginTop:"115px", }}  >
				<div className="col-sm-3	" style={{textAlign:"justify"}} >
					<img src={carita_perro_fondo00} className="imagen_responsive" />
<span className="text-uppercase font-weight-bold ">Clinica Veterinaria</span>
					<br/>
					<span className="text-uppercase font-weight-bold">Patita de Perro</span>
				</div>
				<div className="col-sm-5" style={{textAlign:"justify"}} >
					<p>
							Por que son parte de tu familia, nos especializamos en dar los mejores servicios para tus mascotas
							Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
					</p>
					<p style={{textAlign:"left"}} >
							Subscribe tu email <input type="email"  placeHolder="Envien info a mi email..." />
							<button className="btn btn-outline-success" style={{marginLeft:'5px'}} >Enviar</button>
					</p>				
				</div>
				<div className="col-sm-4" style={{textAlign:"right"}} >
					<img src={ninios_pollito} className="imagen_responsive" />
				</div>
			</div>
			<div className="row"  >
					<div className="col-sm-12	" style={{blackGroundColor:"blue"}} >
							<hr/>
							<CarruselProductos />
					</div>
			</div>
		</>
	)
}
export default Cuerpo;


/// <img src={carita_perro} />
