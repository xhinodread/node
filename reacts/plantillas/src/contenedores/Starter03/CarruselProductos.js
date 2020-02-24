import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner_ventas from "../../assets/banner_ventas.png";

const CarruselProductos=()=>{

	return(
		<>
				<Carousel showStatus={false} showArrows={true} showThumbs={false} 
					autoPlay={true} infiniteLoop={true} 
			  >
				 <div>
						<img className="img-fluid"  src={banner_ventas} />
						<p className="legend">Productos 1</p>
				 </div>
				 <div>
						<img className="img-fluid"  src={banner_ventas} />
						<p className="legend">Productos 2</p>
				 </div>
				 <div>
						<img className="img-fluid"  src={banner_ventas} />
						<p className="legend">Productos 3</p>
				 </div>
			</Carousel>
		</>
	)
}
export default CarruselProductos;
