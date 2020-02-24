import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../stylos/stylo00.css';

import { FacebookProvider, Feed } from 'react-facebook';

const Starter = ()=>{
	return(
		<div className="container-fluid" >
			<div className="row">
				<div className="borde color4 col-sm-12">HEADER</div>
			</div>
			<div className="row">
				<div className="borde color1 col-sm-2 col-md-3">
					<FacebookProvider appId="501581637157133">
						<Feed link="https://www.facebook.com">
						 {({ handleClick }) => (
							<button type="button" onClick={handleClick}>Share on Feed</button>
						 )}
					  </Feed>
					</FacebookProvider>
				</div>
				<div className="borde color2 col-sm-8 col-md-6">CONTENT</div>
				<div className="borde color3 col-sm-2 col-md-3">RIGTH</div>
			</div>
			<div className="row">
				<div className="borde color4 col-sm-12">FOOT</div>
			</div>
		</div>
	)

}
export default Starter;
