import React from 'react';
import CarruselProductos from './CarruselProductos';
import venta_doko from "../../assets/venta_doko.png";
const BannerVentas=()=>{

	return(
		<div className="container_" style={{padding:"10px", textAlign:"center", backgroundColor:"#de4420"}}>	
			<div className="row_">
					<div className="col-sm-4_">
						<img className="img-fluid" src={venta_doko} />
						<CarruselProductos />
					</div>
			</div>
		</div>
	)
}
export default BannerVentas; 
