import React from 'react';
import pataperro from "../../assets/pataperro.png";

const MenuPrincipal=()=>{

// style={{borderBottom: '3px solid red', backgroundColor: '#FFF'}}
	return(
	<div className="fixed-top">
	<nav className="navbar navbar-expand-md navbar-light  module-border-wrap"  >
		
		 <a className="navbar-brand" href="/">
       <img src={pataperro} width="5%" alt="Patita de Perro" />
			 <span className="text-uppercase font-weight-bold fuenteTitulo_nav ">
						Clinica Veterinaria Patita de Perro
			 </span>
     </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Perritos</a>
          </li>
			 <li className="nav-item">
            <a className="nav-link" href="#">Gatitos</a>
          </li>
			 <li className="nav-item">
            <a className="nav-link" href="#">Chanchitos</a>
          </li>          
        </ul>
      </div>
    </nav>
</div>
	)
}
export default MenuPrincipal;

