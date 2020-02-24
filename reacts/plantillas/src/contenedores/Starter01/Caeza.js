import React from 'react';

import patitpaperro from "../../assets/pataperro.png";

const Caeza=()=>{

	return(
		<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
		  <a className="navbar-brand" href="/">				
				<img src={patitpaperro} style={{width:"50px"}} alt="Patita de Perro" className="d-inline-block align-middle mr-2" />
				Patita de Perro			
			</a>			
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			 <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="collapsibleNavbar">
			 <ul className="navbar-nav">
				<li className="nav-item">
				  <a className="nav-link" href="/acerca">Su clínica</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="/servicios">Servicios</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="/consejos">Consejos</a>
				</li>    
			 </ul>
		  </div>  
		</nav>
	)
}
export default Caeza; 
