import React from 'react';

const Foot = ()=>{

  return(
	<footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
				 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
				 className="d-block mb-2">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
					<line x1="9.69" y1="8" x2="21.17" y2="8"></line>
					<line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
					<line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
					<line x1="14.31" y1="16" x2="2.83" y2="16"></line>
					<line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
			 </svg>
          <small className="d-block mb-3 text-muted">&copy; 2020-2020</small>
        </div>

        <div className="col-6 col-md">
          <h5>Interesante</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="cosas_interesantes">Cosas interesantes</a></li>
            <li><a className="text-muted" href="informacion_general">Informacion general</a></li>
            <li><a className="text-muted" href="caracteristicas_del_equipo">Caracteristicas del equipo</a></li>
            <li><a className="text-muted" href="equipo_de_profesionales">Equipo de profesionales</a></li>
            <li><a className="text-muted" href="tribia">Tribia</a></li>
            <li><a className="text-muted" href="ultimas_noticias">Ultimas noticias</a></li>
          </ul>
        </div>

        <div className="col-6 col-md">
          <h5>Servicios</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Diagnosticos</a></li>
            <li><a className="text-muted" href="#">Peluqueria</a></li>
            <li><a className="text-muted" href="#">Baño</a></li>
            <li><a className="text-muted" href="#">Operaciones</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Social</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Social</a></li>
            <li><a className="text-muted" href="#">Tilder de mascotas</a></li>
            <li><a className="text-muted" href="#">Sag</a></li>
            <li><a className="text-muted" href="#">Minsal</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Acerca</h5>
          <ul className="list-unstyled text-small">
            <li><a className="text-muted" href="#">Profesionales</a></li>
            <li><a className="text-muted" href="#">Ubicacion</a></li>
            <li><a className="text-muted" href="#">Instalaciones</a></li>
            <li><a className="text-muted" href="#">Terminos legales</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Foot;
