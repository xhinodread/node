import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Caeza from './Starter01/Caeza';
import CarruselPrincipal from './Starter01/CarruselPrincipal';
import Cuerpo from './Starter01/Cuerpo';
import Piez from './Starter01/Piez';

import Acerca from './Starter01/Acerca';
import Servicios from './Starter01/Servicios';
import Consejos from './Starter01/Consejos';
import BannerVentas from './Starter01/BannerVentas';
//import CarruselProductos from './Starter01/CarruselProductos';

//import venta_doko from "../assets/venta_doko.png";
//import banner_ventas from "../assets/banner_ventas.png";

const Starter=()=>{

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
				 {/*** RUTAS DE LOS LINK SECUNDARIOS, en los lados del sitio, en el footer, en las paginas 
											internas, etc. Menos en el menu principal *****/}
			  </Switch>
			<hr/>			
			<BannerVentas />
			</Router>
			<Piez />
		</>
	)
}
export default Starter; 


