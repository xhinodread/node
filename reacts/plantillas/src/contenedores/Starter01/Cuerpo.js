import React from 'react';

import AcercaHome from './AcercaHome';
import VinculosHome from './VinculosHome';
import Email from './Email';
import Mapa from './Mapa';
import fotoHome00 from "../../assets/fotoHome00.jpeg";
import credencialMapasGoogle from '../../funciones/credencialMapasGoogle';

const mapaUrl = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key='+credencialMapasGoogle.mapsKey;

const Cuerpo=()=>{
	//console.log('mask: ', mapaUrl)
	return(
			<div className="container" style={{marginTop:"30px"}} >
				<div className="row">
					<div className="col-sm-4">
						<AcercaHome />
						<VinculosHome />
						<hr className="d-sm-none" />
					</div>
					<div className="col-sm-8">
						<h2>CLINICA VETERINARIA - PATITA DE PERRO</h2>
						<h5>Bienvenidos</h5>
						<div className="fakeimg">
								<img src={fotoHome00} style={{width:"400px"}} alt="Patita de Perro" className="img-fluid d-inline-block align-middle mr-2" />
						</div>
						<p>Some text..</p>
						<p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
						<br/>
						<div>
								<Email />
						</div>
						<div style={{marginTop:"30px" }} >
								<h3>Nuestra ubicación</h3>
								<Mapa
										googleMapURL={mapaUrl}
										containerElement={<div style={{height:"300px" }} />}
										mapElement= {<div style={{height:"100%" }} />}
										loadingElement= {<p>Cargando ubicación...</p>}
								 />
						</div>
					</div>
				</div>
			</div>
	)
}
export default Cuerpo; 
