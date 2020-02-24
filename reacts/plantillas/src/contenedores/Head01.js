import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import CarruselPrincipal from './CarruselPrincipal';
import pataperro from "../assets/pataperro.png";


const Head01 =(props)=>{
	const {sw} = props;
	return(<Router><div className="fixed-top">
		<nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
		  <div className="container">
			 <a href="/" className="navbar-brand">
				<img src={pataperro} width="5%" alt="Patita de Perro" className="d-inline-block align-middle mr-2" />
				<span className="text-uppercase font-weight-bold">Clinica Veterinaria</span>
				<br/>
				<span className="text-uppercase font-weight-bold">Patita de Perro</span>
			 </a>

			 <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

			 <div id="navbarSupportedContent" className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
				  <li className="nav-item active">
						<a href="/" className="nav-link">Home <span className="sr-only">(current)</span></a>
						{/***<Link to="/">Home</Link>***/}
				  </li>
				  <li className="nav-item"><a href="acerca" className="nav-link">Nosotros</a></li>
				  <li className="nav-item"><a href="servicios" className="nav-link">Servicios</a></li>
				  <li className="nav-item"><a href="consejos" className="nav-link">Consejos</a></li>
				</ul>
			 </div>
		  </div>
		</nav>
		{ (sw==="1"?<div className="" ><CarruselPrincipal /></div>:'') }
	   </div></Router>
		)
}
export default Head01;
