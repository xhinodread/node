import React from 'react';

import { FacebookProvider, Feed } from 'react-facebook';

const VinculosHome=()=>{

	return(
		<>
			<h3>Vinculos</h3>
			<p>						
						<FacebookProvider appId="501581637157133">
									<Feed link="https://www.facebook.com">
											 {({ handleClick }) => (
												<button type="button" className="bnt btn-info bouton-image monBouton"  onClick={handleClick}>Compartenos en Face</button>
											 )}
									</Feed>
						</FacebookProvider>
			</p>
			<ul className="nav nav-pills flex-column">
			  <li className="nav-item">
			    <a className="nav-link" href="#">Examenes</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="#">Radiografias</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link" href="#">Laboratorios</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link disabled" href="#">Granjas</a>
			  </li>
			</ul>
		</>
	)
}
export default VinculosHome; 
