import React from 'react';
import IndexInteresante from './index';
import { Route } from "react-router-dom";

const RouteInteresante =(props)=>{
	//console.log('RouteInteresante: ', props)
	const {pathname} = props.location;
	return(
		<>
		 <Route path={pathname} render={(props) => <IndexInteresante {...props} />} />
		</>
	)
}
export default RouteInteresante;

/*****
		 <Route path="/cosas_interesantes" render={(props) => <IndexInteresante {...props} />} />
		 <Route path="/informacion_general" render={(props) => <IndexInteresante {...props} />} />
		 <Route path="/caracteristicas_del_equipo" render={(props) => <IndexInteresante {...props} />}/>
		 <Route path="/equipo_de_profesionales" render={(props) => <IndexInteresante {...props} />} />
		 <Route path="/tribia" render={(props) => <IndexInteresante {...props} />} />
		 <Route path="/ultimas_noticias" render={(props) => <IndexInteresante {...props} />}/>
*****/
