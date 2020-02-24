import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../stylos/iniciaUno.css';
import Head01 from './Head01';
import CarruselPrincipal from './CarruselPrincipal';
import Cuerpo from './Cuerpo00';
import Foot from './Foot00';
import {mobileAndTabletcheck} from '../funciones/';

import Acerca from './Acerca';
import Servicios from './Servicios';
import Consejos from './Consejos';

//import IndexInteresante from './Interesante/index';
import RouteInteresante from './Interesante/RouteInteresante';

const Starter = ()=>{
 
	const sW = mobileAndTabletcheck();

	if(sW==true){
		return(
			<div>
				<Head01 sw="1" />
				<div className="container" style={{ marginTop:"350px"}} >
					<div className="starter-template">
						<Router  >
						  <Switch>
							 <Route exact path="/">
								<Cuerpo />
							 </Route>
							 <Route path="/acerca">
								<Acerca />
							 </Route>
							 <Route path="/servicios">
								<Servicios />
							 </Route>
							 <Route path="/consejos">
								<Consejos />
							 </Route> 
							 {/*** RUTAS DE LOS LINK SECUNDARIOS, en los lados del sitio, en el footer, en las paginas 
											internas, etc. Menos en el menu principal
							 <RouteInteresante />

							 
						  </Switch>
					</Router>
					</div>
				</div>
				<Foot />
			</div>
		)
	}else{
		return(
			<div>
				<Head01 sw="0" />
				<CarruselPrincipal />
				<div className="container">
					<div className="starter-template">
					<Router  >
					  <Switch>
						 <Route exact path="/">
							<Cuerpo />
						 </Route>
						 <Route path="/acerca">
							<Acerca />
						 </Route>
						 <Route path="/servicios">
							<Servicios />
						 </Route>
						 <Route path="/consejos">
							<Consejos />
						 </Route> 
						  
						 <RouteInteresante />

					  </Switch>
					</Router>
					</div>
				</div>
				<Foot />
			</div>
		)
	}

}
export default Starter;
