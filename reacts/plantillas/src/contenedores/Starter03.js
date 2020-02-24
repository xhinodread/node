import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";

import '../stylos/Starter03/all.css';
import '../stylos/Starter03/bootstrap.min.css';
import '../stylos/Starter03/mdb.min.css';
import '../stylos/Starter03/style.min.css';
import '../stylos/Starter03/starter03.css';


import MenuPrincipal from './Starter03/MenuPrincipal';
import BannerHome from './Starter03/BannerHome';
import Cuerpo from './Starter03/Cuerpo';
import Piez from './Starter03/Piez';

import QuienesSomos from './Starter03/QuienesSomos';

const Starter=()=>{
	return(
		<div className="container_" >
		<MenuPrincipal />
		<BannerHome />
			<Router basename="/sitiodemo">
				<Switch>
				 <Route exact path="/">						
						<Cuerpo />
				 </Route>
				<Route path="/quienes_somos">
						<QuienesSomos />
				 </Route>				 
				 {/*** RUTAS DE LOS LINK SECUNDARIOS, en los lados del sitio, en el footer, en las paginas 
											internas, etc. Menos en el menu principal *****/}

				<Route path="*">
            {()=><>Upps, documento no encontrado</>}
          </Route>					

			</Switch>
			<hr/>
		
			</Router>
			<Piez />
		</div>
	)
}
export default Starter; 

