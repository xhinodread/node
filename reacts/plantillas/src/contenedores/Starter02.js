import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Caeza from './Starter02/Caeza';
//import CarruselPrincipal from './Starter02/CarruselPrincipal';
import MenuPrincipal from './Starter02/MenuPrincipal';
import Cuerpo from './Starter02/Cuerpo';
import Piez from './Starter02/Piez';
/***
import Acerca from './Starter02/Acerca';
import Servicios from './Starter02/Servicios';
import Consejos from './Starter02/Consejos';
import BannerVentas from './Starter02/BannerVentas';
//import CarruselProductos from './Starter02/CarruselProductos';
***/
//import venta_doko from "../assets/venta_doko.png";
//import banner_ventas from "../assets/banner_ventas.png";

const Starter=()=>{

	return(
		<div className="container" >
			<MenuPrincipal />
			<Router basename="/sitiodemo">
				<Switch>
				 <Route exact path="/">
						<Cuerpo />
				 </Route>
				 
				 {/*** RUTAS DE LOS LINK SECUNDARIOS, en los lados del sitio, en el footer, en las paginas 
											internas, etc. Menos en el menu principal *****/}
			</Switch>
			<hr/>
		
			</Router>
			<Piez />
		</div>
	)
}
export default Starter; 

/**************
	return(
		<>
			<CarruselPrincipal />
			<Caeza />
			<Router basename="/sitiodemo">
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
				 {/ *** RUTAS DE LOS LINK SECUNDARIOS, en los lados del sitio, en el footer, en las paginas 
											internas, etc. Menos en el menu principal ***** /}
			  </Switch>
			<hr/>			
			<BannerVentas />
			</Router>
			<Piez />
		</>
	)
**************/

