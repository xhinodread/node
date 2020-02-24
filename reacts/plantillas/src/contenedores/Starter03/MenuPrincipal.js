import React, {useState} from 'react';
import pataperro from "../../assets/pataperro.png";

const MenuPrincipal=()=>{

	const [nombreEmpresa, setNombreEmpresa] = useState('EAM');

	return(
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <div className="container">
      <a className="navbar-brand" href="/" >
        <strong>{nombreEmpresa}</strong>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
					data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        	aria-expanded="false" aria-label="Toggle navigation"
			>
      		<span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Inicio
              <span className="sr-only">(Aquí)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/quienes_somos" >Quienes somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/que_hacemos" >Que hacemos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/servicios" >Servicios</a>
          </li>
        </ul>

        <ul className="navbar-nav nav-flex-icons">
          <li className="nav-item">
            <a href="/" className="nav-link" >
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link" >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://abimarcl.wordpress.com/blog/" target="_blank" className="nav-link border border-light rounded" >
              <i className="fab fa-github mr-2"></i>Proyectos Abimar 
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
	)
}
export default MenuPrincipal;

