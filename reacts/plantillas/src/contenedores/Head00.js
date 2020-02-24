import React from 'react';
import CarruselPrincipal from './CarruselPrincipal';
import '../stylos/iniciaUno.css';
import pataperro from "../assets/pataperro.png";

const Head00 = (props)=>{
	//console.log('log; ', props );
	const {sw} = props;
	console.log('sw; ', sw );
	
	return(
<div className="fixed-top">
	<nav className="navbar navbar-expand-md navbar-dark bg-dark ">
		
		 <a className="navbar-brand" href="#">
          <img src={pataperro} width="5%" alt="Patita de Perro" />
			 <span class="text-uppercase font-weight-bold">Clinica Veterinaria - Patita de Perro</span>
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
	 { (sw==="1"?<div className="" ><CarruselPrincipal /></div>:'') }
</div>
	)
}
export default Head00;

// { (sw==="1"?<div className="offset-4 col-sm-3 fixed-top" ><CarruselPrincipal /></div>:'') }

/****
<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
	       <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>

***/
