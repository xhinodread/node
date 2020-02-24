import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from  'react-google-maps';
const ubica = { lat: -29.962389, lng: -71.344224 };
const Mapa=(props)=>{
	return(
		<GoogleMap
			defaultZoom={15}
			defaultCenter={ubica}
		>
			<Marker position={ubica} />		
		</GoogleMap>
	);
};

export default withScriptjs(
	withGoogleMap(
		Mapa
	)
)
